const practice_trials = {
    forcedChoice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow"
        }
    ],
}

const main_trials = {
	critical: [
		{
	"item":1,
	"list":"1",
	"inference_type":"iru",
	"condition":"redundant",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. Earlier in the morning he drove to the pharmacy. He went in, and found a pharmacist. He paid the pharmacist for his prescription. He put the prescription in a bag. Afterwards he drove to the gas station. He removed the pump and inserted it into his tank. He waited until he had pumped as much gas as he wanted. He closed the tank cover and got into his car. He then left and drove to the store. He paid the cashier.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John habitually or reliably pays the cashier.",
	"a_imp":"John does not always pay the cashier."},
{
	"item":1,
	"list":"2",
	"inference_type":"iru",
	"condition":"plain",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. He paid the cashier.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John habitually or reliably pays the cashier.",
	"a_imp":"John does not always pay the cashier."},
{
	"item":1,
	"list":"3",
	"inference_type":"iru",
	"condition":"wordy",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. Earlier in the morning he drove to the pharmacy. When he went in, the pharmacist couldn't find his medication. They ordered it for the next day. Afterwards he drove to the gas station. When he removed the pump, he spilled gas on himself. He had to get help from a gas station clerk, and cleaned up in the bathroom. He then left and drove to the store. He paid the cashier.\" ",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John habitually or reliably pays the cashier.",
	"a_imp":"John does not always pay the cashier."},
{
	"item":1,
	"list":"4",
	"inference_type":"scalar",
	"condition":"redundant",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. In the morning he drove to the pharmacy. He went in, and found a pharmacist. He paid the pharmacist for his prescription. He put the prescription in a bag. Afterwards he drove to the gas station. He removed the pump and inserted it into his tank. He waited until he had pumped as much gas as he wanted. He closed the tank cover and got into his car. He then left and drove to the store. Some of the fruits he got were on sale.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"All of the fruits John got were on sale.",
	"a_imp":"Not all of the fruits John got were on sale."},
{
	"item":1,
	"list":"5",
	"inference_type":"scalar",
	"condition":"plain",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. Some of the fruits he got were on sale.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"All of the fruits John got were on sale.",
	"a_imp":"Not all of the fruits John got were on sale."},
{
	"item":1,
	"list":"6",
	"inference_type":"scalar",
	"condition":"wordy",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. In the morning he drove to the pharmacy. He went in, and found a pharmacist. They didn't have his medication, though. Afterwards he drove to the gas station. When he removed the pump, he spilled gas on himself. He had to get help from a gas station clerk, and cleaned up in the bathroom. He then left and drove to the store. Some of the fruits he got were on sale.\" ",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"All of the fruits John got were on sale.",
	"a_imp":"Not all of the fruits John got were on sale."},
{
	"item":1,
	"list":"7",
	"inference_type":"manner",
	"condition":"redundant",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. Earlier in the morning he drove to the pharmacy. He went in, and found a pharmacist. He paid the pharmacist for his prescription. He put the prescription in a bag. Afterwards he drove to the gas station. He removed the pump and inserted it into his tank. He waited until he had pumped as much gas as he wanted. He closed the tank cover and got into his car. He then left and drove to the store. He caused groceries to appear in his cart.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John put groceries in his cart normally.",
	"a_imp":"John put groceries in his cart in a non-normal manner; e.g., by accidentally knocking them into the cart."},
{
	"item":1,
	"list":"8",
	"inference_type":"manner",
	"condition":"plain",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. He caused groceries to appear in his cart.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John put groceries in his cart normally.",
	"a_imp":"John put groceries in his cart in a non-normal manner; e.g., by accidentally knocking them into the cart."},
{
	"item":1,
	"list":"9",
	"inference_type":"manner",
	"condition":"wordy",
	"story1":"John often goes to the grocery store around the corner from his apartment. ",
	"story2":"Recently, he came home from the store with groceries. When he came in, he saw his roommate Susan in the hallway, and started talking to her about his day. As he went to the kitchen to put his groceries away, Susan went to the living room, where their roommate Peter was watching TV. ",
	"trigger":"Susan said to Peter: \"John just came back from the grocery store. In the morning he drove to the pharmacy. He went in, and found a pharmacist. They didn't have his medication, though. Afterwards he drove to the gas station. When he removed the pump, he spilled gas on himself. He had to get help from a gas station clerk, and cleaned up in the bathroom. He caused groceries to appear in his cart.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John put groceries in his cart normally.",
	"a_imp":"John put groceries in his cart in a non-normal manner; e.g., by accidentally knocking them into the cart."},
{
	"item":2,
	"list":"5",
	"inference_type":"iru",
	"condition":"redundant",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. Earlier today I needed to bake something. I preheated the oven. I then prepared the recipe, and put it inside the oven for the time required. Afterwards I took it out. Later I needed to feed the dog. I took the food out of the can, and put it in the bowl. I threw out the can afterwards. I then got around to doing the laundry. I used detergent.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Logan habitually or reliably uses detergent when doing laundry.",
	"a_imp":"Logan does not always use detergent when doing laundry."},
{
	"item":2,
	"list":"6",
	"inference_type":"iru",
	"condition":"plain",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. I used detergent.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Logan habitually or reliably uses detergent when doing laundry.",
	"a_imp":"Logan does not always use detergent when doing laundry."},
{
	"item":2,
	"list":"4",
	"inference_type":"iru",
	"condition":"wordy",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. Earlier today I needed to bake something. I preheated the oven, but it was the wrong temperature. I then prepared the recipe, but it burned. Afterwards I had to cut off the burned parts. Later I needed to feed the dog. I couldn't find him at first, though. I gave him some new food, and had to coax him to eat it. I then got around to doing the laundry. I used detergent.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Logan habitually or reliably uses detergent when doing laundry.",
	"a_imp":"Logan does not always use detergent when doing laundry."},
{
	"item":2,
	"list":"8",
	"inference_type":"scalar",
	"condition":"redundant",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. Earlier today I needed to bake something. I preheated the oven. I then prepared the recipe, and put it inside the oven for the time required. Afterwards I took it out. Later I needed to feed the dog. I took the food out of the can, and put it in the bowl. I threw out the can afterwards. I then got around to doing the laundry. I threw some of the dirty sheets into the wash.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Logan threw all of the dirty sheets into the wash.",
	"a_imp":"Logan did not throw all of the dirty sheets into the wash."},
{
	"item":2,
	"list":"9",
	"inference_type":"scalar",
	"condition":"plain",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. I threw some of the dirty sheets into the wash.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Logan threw all of the dirty sheets into the wash.",
	"a_imp":"Logan did not throw all of the dirty sheets into the wash."},
{
	"item":2,
	"list":"7",
	"inference_type":"scalar",
	"condition":"wordy",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. Earlier today I needed to bake something. I preheated the oven, but it was the wrong temperature. I then prepared the recipe, but it burned. Afterwards I had to cut off the burned parts. Later I needed to feed the dog. I couldn't find him at first, though. I gave him some new food, and had to coax him to eat it. I then got around to doing the laundry. I threw some of the dirty sheets into the wash.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Logan threw all of the dirty sheets into the wash.",
	"a_imp":"Logan did not throw all of the dirty sheets into the wash."},
{
	"item":2,
	"list":"2",
	"inference_type":"manner",
	"condition":"redundant",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. Earlier today I needed to bake something. I preheated the oven. I then prepared the recipe, and put it inside the oven for the time required. Afterwards I took it out. Later I needed to feed the dog. I took the food out of the can, and put it in the bowl. I threw out the can afterwards. I then got around to doing the laundry. I caused bleach to go into the washing machine.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John put bleach into the washing machine normally.",
	"a_imp":"John put bleach into the washing machine in a non-normal manner; e.g., by accidentally knocking it into the machine."},
{
	"item":2,
	"list":"3",
	"inference_type":"manner",
	"condition":"plain",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. I caused bleach to go into the washing machine.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John put bleach into the washing machine normally.",
	"a_imp":"John put bleach into the washing machine in a non-normal manner; e.g., by accidentally knocking it into the machine."},
{
	"item":2,
	"list":"1",
	"inference_type":"manner",
	"condition":"wordy",
	"story1":"Logan often helps out around the house, sometimes by doing laundry.",
	"story2":"Yesterday, after doing a load, he went to the living room to watch some TV. Soon his roommate Sophia came home, and asked about his day while taking off her coat.",
	"trigger":"Logan said to Sophia: \"I just did the laundry. Earlier today I needed to bake something. I preheated the oven, but it was the wrong temperature. I then prepared the recipe, but it burned. Afterwards I had to cut off the burned parts. Later I needed to feed the dog. I couldn't find him at first, though. I gave him some new food, and had to coax him to eat it. I then got around to doing the laundry. I caused bleach to go into the washing machine.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"John put bleach into the washing machine normally.",
	"a_imp":"John put bleach into the washing machine in a non-normal manner; e.g., by accidentally knocking it into the machine."},
{
	"item":3,
	"list":"9",
	"inference_type":"iru",
	"condition":"redundant",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. In the morning she put her clothes on and brushed her teeth. She grabbed her house keys, and opened the front door. She then left her house. She went to get something to eat. The café was open and she went in. She ordered some food there, and ate it. She paid and left. She then had to take the train. She bought a subway ticket.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Jane habitually or reliably buys a ticket when taking the subway.",
	"a_imp":"Jane does not always buy a ticket when taking the subway."},
{
	"item":3,
	"list":"7",
	"inference_type":"iru",
	"condition":"plain",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. She bought a subway ticket.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Jane habitually\\/reliably buys a ticket when taking the subway.",
	"a_imp":"Jane does not always buy a ticket when taking the subway."},
{
	"item":3,
	"list":"8",
	"inference_type":"iru",
	"condition":"wordy",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. In the morning she tried to dress up, but found that the dog had chewed her outfit. Her house keys were missing, and she had to borrow her roommate's. She went to get something to eat. The café was closed due to a fire. It took her a while to find another place nearby. She then had to take the train. She bought a subway ticket.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Jane habitually or reliably buys a ticket when taking the subway.",
	"a_imp":"Jane does not always buy a ticket when taking the subway."},
{
	"item":3,
	"list":"3",
	"inference_type":"scalar",
	"condition":"redundant",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. In the morning she put her clothes on and brushed her teeth. She grabbed her house keys, and opened the front door. She then left her house. She went to get something to eat. The café was open and she went in. She ordered some food there, and ate it. She paid and left. She then had to take the train. Some of the passengers in her car were yelling at each other loudly.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"All of the passengers were yelling at each other loudly.",
	"a_imp":"Not all of the passengers were yelling at each other loudly."},
{
	"item":3,
	"list":"1",
	"inference_type":"scalar",
	"condition":"plain",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. Some of the passengers in her car were yelling at each other loudly.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"All of the passengers were yelling at each other loudly.",
	"a_imp":"Not all of the passengers were yelling at each other loudly."},
{
	"item":3,
	"list":"2",
	"inference_type":"scalar",
	"condition":"wordy",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. In the morning she tried to dress up, but found that the dog had chewed her outfit. Her house keys were missing, and she had to borrow her roommate's. She went to get something to eat. The café was closed due a fire. It took her a while to find another place nearby. She then had to take the train. Some of the passengers in her car were yelling at each other loudly.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"All of the passengers were yelling at each other loudly.",
	"a_imp":"Not all of the passengers were yelling at each other loudly."},
{
	"item":3,
	"list":"6",
	"inference_type":"manner",
	"condition":"redundant",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. In the morning she put her clothes on and brushed her teeth. She grabbed her house keys, and opened the front door. She then left her house. She went to get something to eat. The café was open and she went in. She ordered some food there, and ate it. She paid and left. She then had to take the train. She caused the vending machine to spit out a ticket.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Jane obtained tickets (from one of the new vending machines) normally.",
	"a_imp":"Jane obtained tickets (from one of the new vending machines) in a non-normal manner; e.g. by getting the machine to give her a ticket without paying."},
{
	"item":3,
	"list":"4",
	"inference_type":"manner",
	"condition":"plain",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. She caused the vending machine to spit out a ticket.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Jane obtained tickets (from one of the new vending machines) normally.",
	"a_imp":"Jane obtained tickets (from one of the new vending machines) in a non-normal manner; e.g. by getting the machine to give her a ticket without paying."},
{
	"item":3,
	"list":"5",
	"inference_type":"manner",
	"condition":"wordy",
	"story1":"Jane takes the subway all the time to get around the city.",
	"story2":"Today she was entering a subway station when she ran into her friend Don, and they took the train together as they were heading in the same direction. Later that day, Don ran into Beth, Jane's sister, on the street.",
	"trigger":"Don said to Beth: \"I took a train with Jane today. In the morning she tried to dress up, but found that the dog had chewed her outfit. Her house keys were missing, and she had to borrow her roommate's. She went to get something to eat. The café was closed due a fire. It took her a while to find another place nearby. She then had to take the train. She caused the vending machine to spit out a ticket.\"",
	"question":"Given the story above, which of the following do you find more likely?",
	"a_noimp":"Jane obtained tickets (from one of the new vending machines) normally.",
	"a_imp":"Jane obtained tickets (from one of the new vending machines) in a non-normal manner; e.g. by getting the machine to give her a ticket without paying."}],
filler: [
{
	"item":4,
	"list":"all",
	"inference_type":"filler",
	"condition":"filler",
	"story1":"During summer camp, every student was allowed no more than one helping of the main dish for lunch, but some students lined up twice. Mrs. Sanders was together with her son Ted during the entire lunch break yesterday. A teacher approached Mrs. Sanders afterwards to find out how her son had acted during lunch.",
	"story2":null,
	"trigger":null,
	"question":"Given the story above, which of the following do you find more likely?",
	"true":"Mrs. Sanders is Ted's mother.",
	"false":"Mrs. Sanders is not Ted's mother."},
{
	"item":5,
	"list":"all",
	"inference_type":"filler",
	"condition":"filler",
	"story1":"Jimmy skipped school to go on a day trip to New York City last week. Since he had to be back in the afternoon, he barely had one hour to spend in the city. Jimmy's younger brother, who is very talkative, even if he often doesn't know what he's talking about, told the neighbors about Jimmy's trip afterwards.",
	"story2":null,
	"trigger":null,
	"question":"Given the story above, which of the following do you find more likely?",
	"true":"Jimmy did not go on a school trip to New York City.",
	"false":"Jimmy went on a school trip to New York City."},
{
	"item":6,
	"list":"all",
	"inference_type":"filler",
	"condition":"filler",
	"story1":"Pete was playing in the schoolyard during recess, when he fell off the slide. His teacher drove him to the hospital immediately, and called Pete's mother from there.",
	"story2":null,
	"trigger":null,
	"question":"Given the story above, which of the following do you find more likely?",
	"false":"Pete's mother was there when he fell off the slide.",
	"true":"Pete's mother was not there when he fell off the slide."}
	]
}