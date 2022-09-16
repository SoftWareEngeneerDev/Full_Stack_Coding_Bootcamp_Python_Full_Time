##2. Créez un dictionnaire appelé brand dont la valeur
#est l’information de la première partie (transformez
# les informations en clés et valeurs).

brand = {
   'creation_date': 1975,
   'creator_name': ['Amancio', 'Ortega', 'Gaona'],
   'type_of_clothes': ['men', 'women', 'children', 'home'],
   'name': 'Zara',
   'international_competitors': ["Gap", "H&M", "Benetton"],
   'number_stores': 7000,
   'major_color':{
       'France': 'blue',
       'color': 'red',
       'US':[ 'pink', 'green']
     }
}
#3. Modifiez le nombre de magasins à 2.
brand['number_stores']=2

print("Les client de zaras sont :"+brand['creator_name'][0]+" "+brand['creator_name'][1]+" "+brand['creator_name'][2])

brand.update({'country_creation':'Spain'})
if brand.setdefault("international_competitors", "Desigual"):
    brand["international_competitors"].append("Desigual")
print(brand["international_competitors"])
brand.pop("creation_date")
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand.values()))
print(brand.keys())

more_on_zara={'creation_date': 1975,
              'number_stores': 10000
              }
brand.update(more_on_zara)
print(brand["number_stores"])
print("comme les existaient déja cette instruction n'a fais que remplacé ses valeurs")
#brand = more_on_zara.copy()
#print(brand)