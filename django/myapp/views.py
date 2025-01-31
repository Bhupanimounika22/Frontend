from django.shortcuts import render

# Create your views here.
def HtmlForm(request):
    return render(request, "app/form.html")
