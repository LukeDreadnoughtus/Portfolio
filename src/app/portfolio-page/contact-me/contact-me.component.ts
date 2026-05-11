import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ContactMeDialogComponent } from "./contact-me-dialog/contact-me-dialog.component";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

function detailedEmailValidator(control: AbstractControl): ValidationErrors | null {
  const email = String(control.value ?? '').trim();

  if (!email) return null;

  if (!email.includes('@')) return { missingAt: true };

  const [localPart, domainPart, ...extraParts] = email.split('@');

  if (!localPart) return { missingLocalPart: true };
  if (!domainPart || extraParts.length > 0) return { invalidEmailDomain: true };
  if (!domainPart.includes('.')) return { missingDot: true };

  const domainSections = domainPart.split('.');
  const topLevelDomain = domainSections.at(-1) ?? '';

  if (domainSections.some(section => section.length === 0)) return { invalidEmailDomain: true };
  if (topLevelDomain.length < 2) return { missingTopLevelDomain: true };

  return null;
}

function mustAcceptPrivacyPolicy(control: AbstractControl) {
  if (control.value === true) {
    return null;
  }

  return { privacyPolicyIsNotAccepted: true };
}


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, NgClass, ContactMeDialogComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactMeComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  enteredNameInvalid = signal(false);
  enteredEmailInvalid = signal(false);
  enteredMessageInvalid = signal(false);
  checkboxValid = signal(false);
  emailGotDelivered = signal(false);
  gotClicked = signal(false);

  form = new FormGroup({
    name: new FormControl("", {
      validators: [Validators.required]
    }),
    email: new FormControl("", {
      validators: [Validators.required, Validators.email, detailedEmailValidator]
    }),
    message: new FormControl("", {
      validators: [Validators.required]
    }),
    checkbox: new FormControl(false, {
      validators: [mustAcceptPrivacyPolicy]
    })
  });


  /**
   * Set's up a subscription when initializing this component to the checkbox of the formgroup
   * This subscription changes the checkboxValid variable when the value of the checkbox changes
   * 
   */
  ngOnInit(): void {
    const subscription = this.form.controls.checkbox.valueChanges.subscribe({
      next: value => {
        this.checkboxValid.set(value!);
        if (!this.gotClicked()) {
          this.gotClicked.set(true);
        }
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }


  /**
   * This method submits the form, and if it is valid it calls the emailJS library to send the email
   * 
   * @returns - It return's if the form is invalid
   */
  onSubmit(e: Event) {
    
    if (this.form.invalid) {
      if (!this.form.controls.name.valid) {
        this.enteredNameInvalid.set(true);
      }

      if (this.form.invalid) {
        this.form.markAllAsTouched();
      }

      if (!this.form.controls.email.valid) {
        this.enteredEmailInvalid.set(true);
      }

      if (!this.form.controls.message.valid) {
        this.enteredMessageInvalid.set(true);
      }

      if (!this.form.controls.checkbox.valid) {
        this.checkboxValid.set(false);
      }
      if (!this.gotClicked()) {
        this.gotClicked.set(true);
      }
      return;
    }
    this.sendForm(e);
  }


  /**
   * This is the EmailJS library function to send the form data to my Email
   * 
   * @param e - Event
   */
  sendForm(e: Event) {
    emailjs
      .sendForm('service_h030brs', 'template_ieclkyj', e.target as HTMLFormElement, {
        publicKey: 'PZ1pNC8OxFxg5fExo',
      })
      .then(
        () => {
          this.form.reset();
          this.emailGotDelivered.set(true);
          this.gotClicked.set(false);
        },
        (error) => {
          console.error('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }


  /**
   * It removes the validation error message when clicking into the input field
   * 
   * @param formGroupMember - The name of the input field
   */
  showControlError(controlName: 'name' | 'email' | 'message'): boolean {
  const control = this.form.controls[controlName];
  return control.invalid && (control.touched || control.dirty);
  }

  getEmailErrorMessage(): string {
  const emailControl = this.form.controls.email;

  if (emailControl.hasError('required')) return 'Your email is required';
  if (emailControl.hasError('missingAt')) return 'Your email needs an @ sign';
  if (emailControl.hasError('missingLocalPart')) return 'Your email needs something before the @ sign';
  if (emailControl.hasError('missingDot')) return 'Your email needs a domain ending like .de or .com';
  if (emailControl.hasError('missingTopLevelDomain')) return 'Your email ending needs at least two letters, like .de or .com';

  return 'Please enter a valid email address';
  }


  /**
   * Closes the confirmation dialog
   * 
   * @param bool - Will be false
   */
  closeDialog(bool: boolean) {
    this.emailGotDelivered.set(bool);
  }
}







