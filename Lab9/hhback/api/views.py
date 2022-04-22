from pydoc import describe
from django.shortcuts import render
from api.models import Company, Vacancy
from django.http import HttpResponse, JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def companies_list(request):
    if request.method == 'GET':    
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe = False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            comp_name = data.get('name')
            comp_desc = data.get('description')
            comp_city = data.get('city')
            comp_addr = data.get('address')
            comp_data = {
                'name': comp_name,
                'description': comp_desc,
                'city': comp_city,
                'address': comp_addr
            }
            company = Company.objects.create(**comp_data)
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(company.to_json())


def company_detail(request, companyid):
    try:
        company = Company.objects.get(id = companyid)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status = 400)
    
    return JsonResponse(company.to_json())

def company_vacancies(request, companyid):
    try:
        company = Company.objects.get(id = companyid)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status = 400)
    
    vacancies_json = [vacancy1.to_json() for vacancy1 in company.vacancies.all()]
    return JsonResponse(vacancies_json, safe = False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe = False)

def vacancy_detail(request, vacancyid):
    try:
        vacancy = Vacancy.objects.get(id = vacancyid)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status = 400)
    
    return JsonResponse(vacancy.to_json())

def top10(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe = False)