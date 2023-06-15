class Ancestral_stories:
    def __init__(self,length,age_group,moral_lesson):
        self.length=length
        self.age_group = age_group
        self.moral_lesson = moral_lesson

    def story(self,theme):
        self.theme = theme
        return f"The session always took {self.length} for the {self.age_group} and moral of the story was always {self.moral_lesson} from {self.theme}"
    
    def story_teller(self,person):
        self.person=person
        return f"The {self.age_group} were given stories by the {self.person}"
    
    def translator(self,language):
        self.language=language
        return f"Sometimes the story for the {self.age_group} were translated from {self.language} to the visitor's language"
    

# Question2
class African_cuisine:
    def __init__(self,ingredients,preparation_time,cooking_method,nutritional_value):
        self.ingredients=ingredients
        self.preparation_time = preparation_time
        self.cooking_method = cooking_method
        self.nutritional_value = nutritional_value

    def moroccan_recipe(self,country):
        self.country = country
        return f"The morrocan food takes {self.ingredients} which can take {self.preparation_time} to prepare. The most common cooking method is {self.cooking_method} and it has {self.nutritional_value} value, it is from {self.country}"
    

    def ethopian_recipe(self,taste):
        self.taste = taste
        return f"Ethopian food can be prepared using {self.ingredients} for {self.preparation_time} and it has {self.nutritional_value} value"
    
    def nigerian_recipe(self, mixed):
        self.mixed = mixed
        return f"Nigerian food has {self.nutritional_value}. It takes {self.preparation_time} to prepare and the method they use to cook is {self.cooking_method}"
    


    # Question3

class Wildlife_preservation:
    def __init__(self,diet,typical_lifespan,migration_pattern):
        self.diet = diet
        self.typical_lifespan =typical_lifespan
        self.migration_pattern = migration_pattern


class Species(Wildlife_preservation):
    def __init__(self,animal):
        self.animal = animal

    def animals(self):
        return f"the species migrate during the{self.migration_pattern} "
    

class Prey(Wildlife_preservation):
    def __init__(self,direction):
        self.direction = direction

    def preys(self):
        return f"The preys are always on the {self.direction} side of the park. They hunt down the {self.diet}. They have a life span of {self.typical_lifespan}"
    

class Predator(Wildlife_preservation):
    def __init__(self,food):
        self.food = food

    def eat(self):
        return f"The preys have a lifespan of {self.typical_lifespan} and they maigrate during the {self.migration_pattern}. Their food is mostly {self.food}"
    