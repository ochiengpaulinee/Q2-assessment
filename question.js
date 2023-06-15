// Question1

class AncestralStories{
    constructor(length,age_group, moral_lesson){
        this.length=length
        this.age_group=age_group
        this.moral_lesson=moral_lesson
    }

    stories(){
        console.log(`In many African communities, stories lasted for  ${this.length} for the ${this.age_group} and the main moral lesson was ${this.moral_lesson}`)
    }
}

let ancestralStrories = new AncestralStories("2 hours","youths","community")
ancestralStrories.stories()
console.log({ancestralStrories})

class Story extends AncestralStories{
    constructor(length,age_group,moral_lesson,time){
        super(length,age_group,moral_lesson);
        this.time=time
    }
    story(){
        console.log(`The children were always given stories for ${this.length}, it happened at ${this.time}`)
    }
}

let storyy =new Story("30 minutes","children","respect","evening");
storyy.story()
console.log({storyy})


class StoryTeller extends AncestralStories{
    constructor(length,age_group,person){
        super(length,age_group);
        this.person=person
    }

    storyteller(){
        console.log(`As for the ${this.age_group}, most of their stories were narrated by ${this.person}`)
    }
}

let stroryTeller =new StoryTeller("2 hours","young women","elder women");
stroryTeller.storyteller()
console.log({stroryTeller})



// Question2
class African_cuisine{
    constructor(ingrdients,nutritionalValue,preaparationTime,cookingMethod){
        this.ingrdients = ingrdients
        this.nutritionalValue = nutritionalValue
        this.preaparationTime = preaparationTime
        this.cookingMethod = cookingMethod
    }

    cooking(){
        console.log(`Many african culture have ${this.ingrdients} has one of their ingredients`)
    }
}

class Moroccan_recipe extends African_cuisine{
    constructor(ingrdients,preaparationTime,cookingMethod,country){
        super(ingrdients,cookingMethod,preaparationTime)
        this.country = country
    }
    morocco(){
        console.log(`As for ${this.country} their main ingredient is ${this.ingrdients}, it can take ${this.preaparationTime} to cook`)
    }
}

let recipe = new Moroccan_recipe("flour","3hours","stoves","Morroco");
recipe.morocco()
console.log({recipe})


class Ethopian_recipe extends African_cuisine{
    constructor(ingrdients,preaparationTime,cookingMethod,taste){
        super(ingrdients,cookingMethod,preaparationTime)
        this.taste = taste
    }
    ethopia(){
        console.log(`Their main ingredient is ${this.ingrdients}, it can take ${this.preaparationTime} to cook. It has a ${this.taste} taste`)
    }
}

let cooking = new Ethopian_recipe("spices","2 hours","fermentation","sweet")
cooking.ethopia()
console.log({cooking})




class Nigerian_recipe extends African_cuisine{
    constructor(ingrdients,preaparationTime,cookingMethod,texture){
        super(ingrdients,cookingMethod,preaparationTime)
        this.texture = texture
    }
    nigeria(){
        console.log(`Their main ingredient is ${this.ingrdients}, it can take ${this.preaparationTime} to cook. It has a ${this.texture} texture`)
    }
}

let cook = new Nigerian_recipe("spices","1 hours","boiling","soft")
cook.nigeria()
console.log({cook})