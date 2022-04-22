from django.urls import path
from api.views import companies_list, company_detail, company_vacancies, vacancies_list, vacancy_detail, top10

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:companyid>/', company_detail),
    path('companies/<int:companyid>/vacancies/', company_vacancies),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancyid>/', vacancy_detail),
    path('vacancies/top_ten/', top10)
]


# /api/companies - List of all Companies
# /api/companies/<int:id>/ - Get one Company
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
# /api/vacancies/ - List of all Vacancies
# /api/vacancies/<int:id>/ - Get one Vacancy
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary
