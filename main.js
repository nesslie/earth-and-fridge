
var userStyled = {};
const inputs = [];


class Fridge{
  calculateSustainability(){
    const temp = [0,0];
    for(var i = 0; i < userStyled.length; i++){
      if(userStyled[i]["Tag"] == "Sustainable"){
        temp[0]++;
      } else {
        temp[1]++;
      }
    }
    var str = temp[0] + " of your choice(s) were sustainable for the environment! Sadly " + temp[1] + " choice(s) were unsustainable for the planet. Try using our suggestions next time you go shopping &#x1f30e;"
    document.getElementById("summary").innerHTML = str;
  }
  removeIndex(){
    var temp = document.getElementById("formID").value;
    temp = inputs.indexOf(temp);
    if (temp > -1) { inputs.splice(temp, 1)}
    document.getElementById("demo").innerHTML = inputs;
  }

  add2user(arg){
    arg.push(document.getElementById("formID").value);
    document.getElementById("demo").innerHTML = arg;
  }

  mergedUpdate(arg_input){
    this.merge(arg_input);
    var txt = '';
    for(var i = 0; i < Object.keys(userStyled).length; i++){
     txt += "Item Name: " + userStyled[i]["Item Name"] + "</br>";
     txt += "Verdict: " + userStyled[i]["Tag"] + "</br>";
     txt += "Calories: " + userStyled[i]["Calories"] + "</br>";
     txt += "Description: " + userStyled[i]["Sustainability"] + "</br>";
     txt += "Suggested Replacements: " + userStyled[i]["Suggested Replacements"] + "</br></br>";
    }
    document.getElementById("merged").innerHTML = txt;
    this.calculateSustainability();
  }

  merge(arg_inputs){
    var x;
    const test = [];
    for(x in arg_inputs){
      for(var i = 0; i < Object.keys(db).length; i++){
        if(arg_inputs[x] == db[i]["Item Name"]){
          test[x] = db[i];
          break;
        }
        test[x] = "Invalid Input";
      }
    }
    userStyled = test;
  }

}

var smartFridge = new Fridge([]);



var db = [{"Item Name":"Apples","Sustainability":"Apples are highly sustainable, only requiring 822 liters of water per 1kg of apples. Apples also have a very low carbon footprint, producing only 0.7kg of CO2 for 1kg apples.", 
"Suggested Replacements":"None","Calories":"Around 95 per fruit","Tag":"Sustainable"},

{"Item Name":"Oranges","Sustainability":"Oranges have a very low carbon footprint, only producing 0.6kg of CO2 to produce 1kg of oranges. About 560 liters of water are used to produce 1kg of oranges. This makes oranges a sustainable choice for the refrigerator.", 
"Suggested Replacements":"None","Calories":"Around 87 per fruit","Tag":"Sustainable"},

{"Item Name":"Kiwis","Sustainability":"Kiwis have a low carbon footprint, only producing 0.9kg of carbon dioxide to produce 1 kilogram of fruit. Kiwis also use a low amount of water to grow, only needing 514 litres of water per kilogram of fruit. This makes kiwis a sustainable fruit.", 
"Suggested Replacements":"None","Calories":"Around 42 per fruit","Tag":"Sustainable"},

{"Item Name":"Wine","Sustainability":"Wine has a high carbon footprint, emitting around 3.5kg of carbon dioxide to produce 1 kilogram of wine. Wine also strains the local water supply in its production, leading to wine being unsustainable.", 
 "Suggested Replacements":"None","Calories":"123 per glass","Tag":"Unsustainable"},

{"Item Name":"Cherry","Sustainability":"Cherries have a low carbon footprint, only producing 0.78kg of carbon dioxide to produce 1kg of cherries. They have a low water footprint of 1,411 liters to produce 1kg of fruit, leading them to be a sustainable choice.", 
"Suggested Replacements":"None","Calories":"Around 77 in one cup of fruit","Tag":"Sustainable"},

{"Item Name":"Watermelon","Sustainability":"Watermelons use a low amount of water despite their name, only needing 235 liters of water to produce 1kg of fruit. They also have a low carbon emission of only 0.14kg of CO2 emitted per 1kg of fruit. This means that watermelon is extremely sustainable.", 
 "Suggested Replacements":"None","Calories":"Around 46 in a cup of fruit","Tag":"Sustainable"},

{"Item Name":"Strawberries","Sustainability":"Strawberries have a low water footprint, only needing 347 liters of water to produce 1kg of fruit. They also have a low carbon footprint of 0.27kg of CO2 emissions to produce 1kg of fruit. This means that strawberries are a sustainable source of food.", 
"Suggested Replacements":"None","Calories":"47 calories per cup of fruit","Tag":"Sustainable"},
                
{"Item Name":"Banana","Sustainability":"Bananas use a low amount of water, only needing 790 liters of water to produce 1kg of bananas and only emitting 1.4kg of carbon dioxide in the process. However the production of bananas harms the environment due to the destruction of habitats in third world countries.", 
"Suggested Replacements":"None","Calories":"Around 105 per fruit","Tag":" Moderately Sustainable"},
                
{"Item Name":"Peach","Sustainability":"Peaches use around 910 liters of water to produce 1kg of fruit, and emit 0.22kg of carbon dioxide in the process. This makes peaches a sustainable source of food.", 
 "Suggested Replacements":"None","Calories":"Around 59 per fruit","Tag":"Sustainable"},
                
{"Item Name":"Mango","Sustainability":"Mangos use around 1,800 liters of water to produce 1kg of fruit, and emit 0.07kg of CO2 in the process meaning they are a sustainable food.", 
"Suggested Replacements":"None","Calories":"Around 201 per fruit","Tag":"Sustainable"},
                
{"Item Name":"Nectarine","Sustainability":"Nectarines use around 910 liters of water to produce 1kg of fruit and emit 0.22kg of carbon dioxide in the process. This means that nectarines are a sustainable choice for your diet.", 
"Suggested Replacements":"None","Calories":"Around 63 per fruit","Tag":"Sustainable"},

{"Item Name":"Pear","Sustainability":"Pears only need 922 liters of water to produce 1kg of pears, and emit 0.34kg of CO2 in the process.", 
 "Suggested Replacements":"None","Calories":"Around 102 per fruit","Tag":"Sustainable"},
                                
{"Item Name":"Apricot","Sustainability":"Pears have a higher water footprint of 1287 liters to grow one kilogram of apricots. This process produces 0.23kg of CO2 per kilogram, and has a relatively little impact on the environment.", 
"Suggested Replacements":"None","Calories":"Around 17 per fruit","Tag":"Sustainable"},
                                
{"Item Name":"Blackberry","Sustainability":"Blackberries need around 962 liters of water to produce 1kg of berries, and emit 0.28kg of CO2. This means that blackberries are sustainable for the environment.", 
 "Suggested Replacements":"None","Calories":"62 in a cup of fruit","Tag":"Sustainable"},
                                
{"Item Name":"Coconut","Sustainability":" Coconut has a moderate water footprint, needing 2,687 liters of water to produce 1kg of coconuts. 2.1kg of carbon dioxide is emitted in the process of producing coconuts, and some fields are leveled to make room to grow coconuts leading to deforestation.", 
"Suggested Replacements":"None","Calories":"Around 283 in one cup","Tag":"Moderately Sustainable"},
                                
{"Item Name":"Papaya","Sustainability":"Papayas have a low carbon footprint and a low water footprint, only needing 460 liters of water and emitting 0.9kg of carbon dioxide to produce 1kg of fruit. However the demand for papayas leads to a large amount of deforestation to make enough room to farm these plants.", 
"Suggested Replacements":"None","Calories":"A medium papaya has around 120 calories","Tag":"Moderately Sustainable"},

{"Item Name":"Dragonfruit","Sustainability":" Dragonfruit has a low water footprint and carbon dioxide emissions, only needing 967 liters of water and emitting 0.9kg of carbon dioxide to produce 1kg of fruit.", 
"Suggested Replacements":"None","Calories":"102 per 6 ounces","Tag":"Sustainable"},
    
{"Item Name":"Tofu","Sustainability":"Tofu is likely sustainable, requiring 2145 liters of water per 1kg of soybeans. Tofu also has a very low carbon footprint, producing only 2.0 kg of CO2 for 1kg of tofu. ", 
 "Suggested Replacements":"None","Calories":"Around 80 per 3 oz","Tag":"Sustainable"},
    
{"Item Name":"Brown Rice","Sustainability":"Brown Rice is moderately sustainable, requiring 2172 liters of water per 1kg of Brown Rice. Brown Rice also has a moderate carbon footprint, producing only 2.16 kg of CO2 for 1kg of Brown Rice.", 
 "Suggested Replacements":"None","Calories":"Around 200 per 2 cups","Tag":"Moderately Sustainable"},
    
{"Item Name":"Beef","Sustainability":"Beef is unsustainable, requiring 15414 liters of water per 1kg of beef. Beef also has a high carbon footprint, producing only 68.8 kg of CO2 for 1kg of Beef.", 
 "Suggested Replacements":"None","Calories":"Around 240 per 4 oz","Tag":"Unsustainable"},
    
{"Item Name":"Pork","Sustainability":"Pork is unsustainable, requiring 5990 liters of water per 1kg of Pork. Pork also has a high carbon footprint, producing only 12.1 kg of CO2 for 1kg of Pork.", 
"Suggested Replacements":"None","Calories":"Around 300 per 4 oz","Tag":"Unsustainable"},
                
{"Item Name":"Chicken","Sustainability":"Chicken is unsustainable, requiring 4325 liters of water per 1kg of Chicken. Chicken also has a high carbon footprint, producing only 6.9 kg of CO2 for 1kg of Chicken.", 
"Suggested Replacements":"None","Calories":"Around 170 per 4 oz","Tag":"Unsustainable"},
                    
{"Item Name":"Lamb","Sustainability":"Lamb is unsustainable, requiring 5301 liters of water per 1kg of Lamb. Lamb also has a high carbon footprint, producing only 39.2 kg of CO2 for 1kg of Lamb.", 
"Suggested Replacements":"None","Calories":"Around 230 per 4 oz","Tag":"Unsustainable"},
                    
{"Item Name":"Turkey","Sustainability":"Turkey is unsustainable, requiring 4325 liters of water per 1kg of Turkey. Turkey also has a high carbon footprint, producing only 10.9 kg of CO2 for 1kg of Turkey.", 
"Suggested Replacements":"None","Calories":"Around 120 per 112 g","Tag":"Unsustainable"},
                    
{"Item Name":"Salmon","Sustainability":"Salmon is unsustainable. Water footprint for Salmon is unknown. Salmon also has a high carbon footprint, producing only 11.9 kg of CO2 for 1kg of Salmon.", 
"Suggested Replacements":"None","Calories":"Around 170 per 4 oz","Tag":"Unsustainable"},
                    
 {"Item Name":"Milk","Sustainability":"Milk is unsustainable, requiring 1020 liters of water per 1kg of Milk. Milk also has a low carbon footprint, producing only 1.9 kg of CO2 for 1kg of Milk.", 
 "Suggested Replacements":"None","Calories":"Around 140 per 3 cup","Tag":"Unsustainable"},
 
 {"Item Name":"Soy Milk","Sustainability":"Soy Milk is sustainable, requiring 3763 liters of water per 1kg of Soy Milk. Soy Milk also has a low carbon footprint, producing only 0.69 kg of CO2 for 1kg of Soy Milk.", 
 "Suggested Replacements":"None","Calories":" Around 120 per 8 fl oz","Tag":"Sustainable"},
    
{"Item Name":"Cheese","Sustainability":"Cheese is unsustainable, requiring 5060 liters of water per 1kg of Cheese. Cheese also has a low carbon footprint, producing only 13.5 kg of CO2 for 1kg of Cheese.", 
 "Suggested Replacements":"None","Calories":"Around 90 per 3 oz","Tag":"Unsustainable"},
    
{"Item Name":"Butter","Sustainability":"Butter is unsustainable, requiring 5553 liters of water per 1kg of Butter. Butter also has a low carbon footprint, producing only 1.8 kg of CO2 for 1kg of Butter.", 
 "Suggested Replacements":"None","Calories":"Around 180 per 1 oz","Tag":"Unsustainable"},
    
{"Item Name":"Yogurt","Sustainability":"Yogurt is unsustainable, requiring 1186 liters of water per 1kg of Yogurt. Yogurt also has a moderate carbon footprint, producing only 2.2 kg of CO2 for 1kg of Yogurt.", 
"Suggested Replacements":"None","Calories":"Around 120 per 3 cup","Tag":"Unsustainable"},
                
{"Item Name":"Ice Cream","Sustainability":"Ice Cream is unsustainable, requiring 1898 liters of water per 1kg of Ice Cream. Ice Cream also has a low-moderate carbon footprint, producing only 1.82 kg of CO2 for 1kg of Ice Cream.", 
"Suggested Replacements":"None","Calories":"Around 120 per 3 cup","Tag":"Unsustainable"},
                    
{"Item Name":"Cream","Sustainability":"Cream is unsustainable, requiring 1898 liters of water per 1kg of Cream. Cream also has a moderate carbon footprint, producing only 2.4 kg of CO2 for 1kg of Cream.", 
"Suggested Replacements":"None","Calories":"Around 120 per 3 cup","Tag":"Unsustainable"},
                    
{"Item Name":"Eggs","Sustainability":"Eggs are unsustainable, requiring 3265 liters of water per 1kg of Egg. Eggs also have a high carbon footprint, producing only 4.8 kg of CO2 for 1kg of Eggs.", 
"Suggested Replacements":"None","Calories":"Around 25 per 1 tbsp","Tag":"Unsustainable"},
                    
{"Item Name":"Mayonnaise","Sustainability":"Mayonnaise is moderately sustainable, requiring 2364 liters of water per 1kg of Mayonnaise. Mayonnaise also has a moderate-high carbon footprint, producing only 2.4 kg of CO2 for 1kg of Mayonnaise.", 
"Suggested Replacements":"None","Calories":"Around 100 per 2 tbsp","Tag":"Moderately Sustainable"},
                    
 {"Item Name":"Oysters","Sustainability":"Oysters are unsustainable, requiring unknown liters of water per 1kg of Oysters. Oysters also have a high carbon footprint, producing only 11.41 kg of CO2 for 1kg of Oysters.", 
 "Suggested Replacements":"None","Calories":"Around 90 per 4 oz","Tag":"Unsustainable"},

 {"Item Name":"Lobsters","Sustainability":"Lobsters are unsustainable, requiring unknown liters of water per 1kg of Lobsters. Lobsters also have a high carbon footprint, producing only 5.37 kg of CO2 for 1kg of Lobsters.", 
 "Suggested Replacements":"None","Calories":"Around 80 per 3 oz","Tag":"Unsustainable"},
    
{"Item Name":"Clams","Sustainability":"Clams are unsustainable, requiring unknown liters of water per 1kg of Clams. Clams also have a high carbon footprint, producing only 5.4 kg of CO2 for 1kg of Clams.", 
 "Suggested Replacements":"None","Calories":"Around 50 per 4 oz","Tag":"Unsustainable"},
    
{"Item Name":"Octopus","Sustainability":"Octopus is unsustainable, requiring unknown liters of water per 1kg of Octopus. Octopus also has a high carbon footprint, producing only 5.4 kg of CO2 for 1kg of Octopus.", 
 "Suggested Replacements":"None","Calories":"Around 300 per 4 oz","Tag":"Unsustainable"},
    
{"Item Name":"Tuna","Sustainability":"una is unsustainable, requiring unknown liters of water per 1kg of Tuna. Tuna also has a high carbon footprint, producing only 6.1 kg of CO2 for 1kg of Tuna.", 
"Suggested Replacements":"None","Calories":"Around 70 per 2 oz","Tag":"Unsustainable"},
                
{"Item Name":"Cod","Sustainability":"Cod is unsustainable, requiring unknown liters of water per 1kg of Cod. Cod also has a high carbon footprint, producing only 5.25 kg of CO2 for 1kg of Cod.", 
"Suggested Replacements":"None","Calories":"Around 90 per 4 oz","Tag":"Unsustainable"},
                    
{"Item Name":"Whipped Cream","Sustainability":"Whipped Cream is unsustainable, requiring 1898 liters of water per 1kg of Whipped Cream. Whipped Cream also has a low carbon footprint, producing only 0.14 kg of CO2 for 1kg of Whipped Cream.", 
"Suggested Replacements":"None","Calories":"Around 50 per 2 tbsp","Tag":"Unsustainable"},
                    
{"Item Name":"Mackerel","Sustainability":"Mackerel is unsustainable, requiring unknown liters of water per 1kg of Mackerel. Mackerel also has a low carbon footprint, producing only 1.92 kg of CO2 for 1kg of Mackerel.", 
"Suggested Replacements":"None","Calories":"Around 80 per 2 oz","Tag":"Unsustainable"},
                    
{"Item Name":"Carrot","Sustainability":"Carrots are highly sustainable, only requiring 195 liters of water per 1kg of carrots. Carrots also have a very low carbon footprint, producing only 0.11 kg of CO2 for 1kg carrots.", 
"Suggested Replacements":"None","Calories":"Around 41,3 kcal for 100g","Tag":"Sustainable"},
                    
 {"Item Name":"Broccoli","Sustainability":"Broccolis are highly sustainable, only requiring 285 liters of water per 1kg of apples. Broccolis  also have a very low carbon footprint, producing only 2.0 kg of CO2 for 1kg broccolis.", 
 "Suggested Replacements":"None","Calories":"Around 33.7 kcal for 100g","Tag":"Sustainable"},
 
 {"Item Name":"Asparagus","Sustainability":"Asparaguses are highly sustainable, only requiring 2,150 liters of water per 1kg of apples. Asparagus also have a very low carbon footprint, producing only 0.88 kg of CO2 for 1kg asparaguses.", 
 "Suggested Replacements":"None","Calories":"Around 20.3 kcal for 100g","Tag":"Moderately Sustainable"},
    
{"Item Name":"Garlic","Sustainability":"Garlics are highly sustainable, only requiring 589 liters of water per 1kg of apples. Garlics also have a very low carbon footprint, producing only 0.95 kg of CO2 for 1kg garlics.", 
 "Suggested Replacements":"None","Calories":"Around 149 kcal for 100g","Tag":"Sustainable"},
    
{"Item Name":"Eggplant","Sustainability":"Eggplants are highly sustainable, only requiring 362 liters of water per 1kg of eggplants . Eggplants also have a very low carbon footprint, producing only 0.51 kg of CO2 for 1kg eggplants.", 
 "Suggested Replacements":"None","Calories":"Around 24.9 kcal for 100g","Tag":"Sustainable"},
    
{"Item Name":"Green Bean","Sustainability":"Green beans are highly sustainable, only requiring 362 liters of water per 1kg of green beans. Green beans also have a very low carbon footprint, producing only 0.51 kg of CO2 for 1kg green beans.", 
"Suggested Replacements":"None","Calories":"Around 31.3 kcal for 100g","Tag":"Sustainable"},
                
{"Item Name":"Ginger","Sustainability":"Gingers are highly sustainable, only requiring 1,657 liters of water per 1kg of gingers. Gingers also have a very low carbon footprint, producing only 0.4 kg of CO2 for 1kg gingers.", 
"Suggested Replacements":"None","Calories":"Around 79.6 kcal for 100g","Tag":"Moderately Sustainable"},
                    
{"Item Name":"Lettuce","Sustainability":"Lettuces are highly sustainable, only requiring 237 liters of water per 1kg of apples. Lettuces also have a very low carbon footprint, producing only 0.92 kg of CO2 for 1kg lettuces.", 
"Suggested Replacements":"None","Calories":"Around 14.8 kcal for 100g","Tag":"Sustainable"},
                    
{"Item Name":"Onions","Sustainability":"Onions are highly sustainable, only requiring 237 liters of water per 1kg of onions. Lettuces also have a very low carbon footprint, producing only 0.5 kg of CO2 for 1kg onions.", 
"Suggested Replacements":"None","Calories":"Around 39.7 kcal for 100g","Tag":"Sustainable"},
                    
{"Item Name":"Spinach","Sustainability":" Spinaches are highly sustainable, only requiring 292 liters of water per 1kg of spinaches. Spinaches also have a very low carbon footprint, producing only 0.34 kg of CO2 for 1kg spinaches.", 
"Suggested Replacements":"None","Calories":"Around 23 kcal for 100g","Tag":"Sustainable"},
                    
 {"Item Name":"Cucumber","Sustainability":"Cucumbers are highly sustainable, only requiring 353 liters of water per 1kg of cucumbers. Cucumbers also have a very low carbon footprint, producing only 0.14 kg of CO2 for 1kg cucumbers.", 
 "Suggested Replacements":"None","Calories":"Around 45 kcal for 100g","Tag":"Sustainable"},

 {"Item Name":"Leek","Sustainability":"Leeks are highly sustainable, only requiring 322 liters of water per 1kg of leeks. Leeks also have a very low carbon footprint, producing only 1.6 kg of CO2 for 1kg leeks.", 
 "Suggested Replacements":"None","Calories":"Around 69.9 kcal for 100g","Tag":"Sustainable"},
    
{"Item Name":"Celeriac","Sustainability":"Celiac is highly sustainable, only requiring 387 liters of water per 1kg of celeriac. Celeriac also has a very low carbon footprint, producing only 0.4 kg of CO2 for 1kg celeriac.", 
 "Suggested Replacements":"None","Calories":"Around 42 kcal for 100g","Tag":"Sustainable"},
    
{"Item Name":"Celery","Sustainability":"Celeries are highly sustainable, only requiring 322 liters of water per 1kg of celeries. Celeries also have a very low carbon footprint, producing only 0.12 kg of CO2 for 1kg celeries.", 
 "Suggested Replacements":"None","Calories":"Around 16 kcal for 100g","Tag":"Sustainable"},
    
{"Item Name":"Cabbage","Sustainability":"Cabbages are highly sustainable, only requiring 322 liters of water per 1kg of cabbages. Cabbages also have a very low carbon footprint, producing only 0.12 kg of CO2 for 1kg cabbages.", 
"Suggested Replacements":"None","Calories":"Around 24.6 kcal for 100g","Tag":"Sustainable"},
                
{"Item Name":"Chilli pepper","Sustainability":"Chilli peppers are highly sustainable, only requiring 379 liters of water per 1kg of chilli peppers. Chilli peppers also have a very low carbon footprint, producing only 0.26 kg of CO2 for 1kg chilli peppers.", 
"Suggested Replacements":"None","Calories":"Around 39.9 kcal for 100g","Tag":"Sustainable"},
                    
{"Item Name":"Cauliflower","Sustainability":"Cauliflowers are highly sustainable, only requiring 379 liters of water per 1kg of cauliflowers. Cauliflowers also have a very low carbon footprint, producing only 0.26 kg of CO2 for 1kg cauliflowers.", 
"Suggested Replacements":"None","Calories":"Around 24.9 kcal for 100g","Tag":"Sustainable"},
                    
{"Item Name":"Capsicums","Sustainability":"Capsicums are highly sustainable, only requiring 379 liters of water per 1kg of capsicums. Capsicums also have a very low carbon footprint, producing only 0.26 kg of CO2 for 1kg capsicums.", 
"Suggested Replacements":"None","Calories":"Around 26 kcal for 100g","Tag":"Sustainable"},
                    
{"Item Name":"Beetroot","Sustainability":"Beetroots are highly sustainable, only requiring 132 liters of water per 1kg of beetroots. Beetroots also have a very low carbon footprint, producing only 0.05 kg of CO2 for 1kg beetroots.", 
"Suggested Replacements":"None","Calories":"Around 43 kcal for 100g","Tag":"Sustainable"},
                    
 {"Item Name":"Pumpkin","Sustainability":"Pumpkins are highly sustainable, only requiring 336 liters of water per 1kg of pumpkins. Pumpkins also have a very low carbon footprint, producing only 0.14 kg of CO2 for 1kg pumpkins.", 
 "Suggested Replacements":"None","Calories":"Around 26 kcal for 100g","Tag":"Sustainable"},

 {"Item Name":"Silverbeet","Sustainability":"Silverbeets are highly sustainable, only requiring 322 liters of water per 1kg of silverbeets. Silverbeets also have a very low carbon footprint, producing only 1.6 kg of CO2 for 1kg silverbeets.", 
    "Suggested Replacements":"None","Calories":"Around 19 kcal for 100g","Tag":"Sustainable"},
                        
{"Item Name":"Tomatoes","Sustainability":"Tomatoes are highly sustainable, only requiring 214 liters of water per 1kg of tomatoes. Tomatoes also have a very low carbon footprint, producing only 1.1 kg of CO2 for 1kg tomatoes.", 
     "Suggested Replacements":"None","Calories":"Around 18 kcal for 100g","Tag":"Sustainable"},

{"Item Name":"Watercress","Sustainability":"Watercresses are highly sustainable, only requiring 322 liters of water per 1kg of watercresses. Watercresses also have a very low carbon footprint, producing only 1.6 kg of CO2 for 1kg watercresses.", 
        "Suggested Replacements":"None","Calories":"Around 11 kcal for 100g","Tag":"Sustainable"},
                            
{"Item Name":"Radishes","Sustainability":"Radishes are highly sustainable, only requiring 387 liters of water per 1kg of radishes. Radishes also have a very low carbon footprint, producing only 0.16 kg of CO2 for 1kg radishes.", 
         "Suggested Replacements":"None","Calories":"Around 16 kcal for 100g","Tag":"Sustainable"}];
