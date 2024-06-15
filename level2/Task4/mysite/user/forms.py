from django import forms
from .models import SiteUser
from django.contrib.auth.forms import UserCreationForm


class RegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    birth_date = forms.DateField(
        widget=forms.DateInput(attrs={'type': 'date'}))

    class Meta:
        model = SiteUser
        fields = ["username", "email", "first_name", "last_name",
                  "birth_date", "avatar", "password1", "password2"]

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if SiteUser.objects.filter(email=email).exists():
            raise forms.ValidationError(
                "A user with that email already exists.")
        return email
