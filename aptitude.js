// Question Data
const sections = {
  logical: [
    {
      question: "What comes next in the series: 2, 6, 12, 20, ?",
      options: ["28", "30", "32", "24"],
      answer: 0,
      explanation: "The differences are 4, 6, 8, 10. The next difference is 12, so the answer is 28."
    },
    {
      question: "If A is B's father but B is not A's son, what is B to A?",
      options: ["Daughter", "Son", "Cousin", "Nephew"],
      answer: 0,
      explanation: "B is A's daughter."
    },
    { question: "What comes next in the series: 2, 6, 12, 20, ?", options: ["28", "30", "32", "24"], answer: 0, explanation: "The differences are 4, 6, 8, 10. The next difference is 12, so the answer is 28." },
{ question: "If A is B's father but B is not A's son, what is B to A?", options: ["Daughter", "Son", "Cousin", "Nephew"], answer: 0, explanation: "B is A's daughter." },
{ question: "Which number is missing: 1, 4, 9, 16, ?", options: ["25", "36", "30", "20"], answer: 0, explanation: "These are perfect squares: 1², 2², 3², 4², so the next is 5² = 25." },
{ question: "What is the next number in the series: 3, 6, 12, 24, ?", options: ["36", "48", "60", "50"], answer: 1, explanation: "The numbers double each time, so 24 × 2 = 48." },
{ question: "Which direction is opposite to north?", options: ["East", "South", "West", "None"], answer: 1, explanation: "The opposite direction to north is south." },
{ question: "Choose the synonym of 'fast'.", options: ["Slow", "Quick", "Late", "Dull"], answer: 1, explanation: "'Quick' is a synonym for 'fast.'" },
{ question: "Choose the antonym of 'happy'.", options: ["Sad", "Joyful", "Angry", "Confused"], answer: 0, explanation: "The antonym of 'happy' is 'sad.'" },
{ question: "Identify the verb in this sentence: 'She runs quickly.'", options: ["She", "Runs", "Quickly", "None"], answer: 1, explanation: "The verb in the sentence is 'runs.'" },
{ question: "Which word is misspelled?", options: ["Receive", "Accomodate", "Believe", "Separate"], answer: 1, explanation: "The correct spelling is 'Accommodate.'" },
{ question: "Complete the sentence: 'I ___ to the store yesterday.'", options: ["Go", "Went", "Goes", "Going"], answer: 1, explanation: "The correct form is 'I went to the store yesterday.'" },
{ question: "Choose the synonym of 'bright'.", options: ["Dim", "Smart", "Shiny", "Dark"], answer: 2, explanation: "'Shiny' is a synonym for 'bright.'" },
{ question: "Choose the antonym of 'strong'.", options: ["Weak", "Tough", "Sturdy", "Hard"], answer: 0, explanation: "The antonym of 'strong' is 'weak.'" },
{ question: "Identify the adjective in this sentence: 'The tall man walked quickly.'", options: ["Tall", "Man", "Quickly", "Walked"], answer: 0, explanation: "The adjective in the sentence is 'tall' because it describes the man." },
{ question: "What does 'benevolent' mean?", options: ["Hostile", "Kind", "Angry", "Ignorant"], answer: 1, explanation: "'Benevolent' means kind and generous." },
{ question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Child"], answer: 1, explanation: "The correct plural form of 'child' is 'children'." },
{ question: "Choose the correct article: '___ apple a day keeps the doctor away.'", options: ["An", "A", "The", "No article"], answer: 0, explanation: "We use 'an' before words that start with a vowel sound, like 'apple'." },
{ question: "What is the opposite of 'increase'?", options: ["Expand", "Raise", "Decrease", "Grow"], answer: 2, explanation: "The opposite of 'increase' is 'decrease'." },
{ question: "What is the correct spelling?", options: ["Definately", "Definitely", "Definatly", "Definetly"], answer: 1, explanation: "'Definitely' is the correct spelling." },
{ question: "Choose the synonym of 'difficult'.", options: ["Easy", "Hard", "Simple", "Quick"], answer: 1, explanation: "'Hard' is a synonym for 'difficult.'" },
{ question: "Identify the noun in this sentence: 'The cat chased the mouse.'", options: ["Chased", "Mouse", "The", "Cat"], answer: 3, explanation: "'Cat' is a noun because it is a naming word." },
{ question: "What does 'optimistic' mean?", options: ["Hopeful", "Pessimistic", "Angry", "Sad"], answer: 0, explanation: "'Optimistic' means hopeful and confident about the future." },
{ question: "Which of these is a conjunction?", options: ["And", "Run", "Quickly", "He"], answer: 0, explanation: "'And' is a conjunction as it connects two ideas or phrases." },
{ question: "What is the comparative form of 'good'?", options: ["Better", "Best", "Gooder", "Good"], answer: 0, explanation: "The comparative form of 'good' is 'better.'" },
{ question: "Choose the correct sentence.", options: ["He go to school.", "He goes to school.", "He gone to school.", "He going to school."], answer: 1, explanation: "The correct sentence is 'He goes to school.'" },
{ question: "Choose the antonym of 'success'.", options: ["Win", "Failure", "Victory", "Accomplishment"], answer: 1, explanation: "The antonym of 'success' is 'failure.'" },
{ question: "What does 'optimistic' mean?", options: ["Hopeful", "Pessimistic", "Angry", "Sad"], answer: 0, explanation: "'Optimistic' means hopeful and confident about the future." },
{ question: "Which of these is a conjunction?", options: ["And", "Run", "Quickly", "He"], answer: 0, explanation: "'And' is a conjunction as it connects two ideas or phrases." },
{ question: "What is the comparative form of 'good'?", options: ["Better", "Best", "Gooder", "Good"], answer: 0, explanation: "The comparative form of 'good' is 'better.'" },
{ question: "Choose the correct sentence.", options: ["He go to school.", "He goes to school.", "He gone to school.", "He going to school."], answer: 1, explanation: "The correct sentence is 'He goes to school.'" },
{ question: "Choose the antonym of 'success'.", options: ["Win", "Failure", "Victory", "Accomplishment"], answer: 1, explanation: "The antonym of 'success' is 'failure.'" },
{question: "What comes next in the series: 10, 20, 40, 80, ?",options: ["120", "160", "200", "180"],answer: 1,explanation: "The series doubles each time: 10 × 2 = 20, 20 × 2 = 40, 40 × 2 = 80, so the next is 80 × 2 = 160."},
{question: "Which word does not belong to the group: Dog, Cat, Rabbit, Chair?",options: ["Dog", "Cat", "Rabbit", "Chair"],answer: 3,explanation: "Chair is not an animal."},
{question: "If you rearrange the letters of 'RAPETNIE' you would get:", options: ["Painter", "Repaint", "Pertain", "Pattern"],answer: 0,explanation: "Rearranging 'RAPETNIE' spells 'Painter.'"},
{question: "What is the missing number: 1, 1, 2, 3, 5, ?, 13.",options: ["6", "7", "8", "9"],answer: 2,explanation: "This is the Fibonacci sequence where each number is the sum of the two preceding ones."},
{question: "A clock strikes once at 1 o'clock, twice at 2 o'clock, and so on. How many times will it strike in 24 hours?",options: ["78", "156", "144", "120"],answer: 1,explanation: "Sum of strikes in 12 hours is 1+2+...+12 = 78. In 24 hours, it strikes twice: 78 × 2 = 156."},
{question: "What comes next in the series: 5, 10, 20, 40, ?",options: ["60", "80", "100", "120"],answer: 1,explanation: "The series doubles each time: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40, so the next is 40 × 2 = 80."},
{question: "If 3 cats can catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",options: ["3", "33", "100", "1"],answer: 0,explanation: "The rate of catching is constant: 1 cat can catch 1 mouse in 3 minutes, so 3 cats are enough."},
{question: "Mary is older than Susan. Susan is older than John. Who is the youngest?",options: ["Mary", "Susan", "John", "Cannot be determined"],answer: 2,explanation: "If Mary > Susan > John, then John is the youngest."},
{question: "What is the missing number: 2, 6, 12, 20, 30, ?",options: ["42", "44", "36", "40"],answer: 0,explanation: "The differences between terms are increasing by 2 each time (4, 6, 8, 10, etc.), so the next difference is 12: 30 + 12 = 42."},
{question: "If all roses are flowers and some flowers are tulips, which statement is true?",options: ["All tulips are roses.", "All roses are tulips.", "Some flowers are not roses.", "None of the above."],answer: 3,explanation: "No definite relationship can be inferred between roses and tulips."},
{ question: "What comes next in the series: 2, 6, 12, 20, ?", options: ["28", "30", "32", "24"], answer: 0, explanation: "The differences are 4, 6, 8, 10. The next difference is 12, so the answer is 28." },
{ question: "If A is B's father but B is not A's son, what is A to B?", options: ["Daughter", "Son", "Cousin", "Nephew"], answer: 0, explanation: "B is A's daughter." },
{ question: "Which number is missing: 1, 4, 9, 16, ?", options: ["25", "36", "30", "20"], answer: 0, explanation: "These are perfect squares: 1², 2², 3², 4², so the next is 5² = 25." },
{ question: "What is the next number in the series: 3, 6, 12, 24, ?", options: ["36", "48", "60", "50"], answer: 1, explanation: "The numbers double each time, so 24 × 2 = 48." },
{ question: "Which direction is opposite to South?", options: ["East", "South", "West", "None"], answer: 1, explanation: "The opposite direction to north is south." },
{question: "What comes next in the series: 10, 20, 40, 80, ?",options: ["120", "160", "200", "180"],answer: 1,explanation: "The series doubles each time: 10 × 2 = 20, 20 × 2 = 40, 40 × 2 = 80, so the next is 80 × 2 = 160."},
{question: "Which word does not belong to the group: Dog, Cat, Rabbit, Chair?",options: ["Dog", "Cat", "Rabbit", "Chair"],answer: 3,explanation: "Chair is not an animal."},
{question: "If you rearrange the letters of 'RAPETNIE' you would get:",options: ["Painter", "Repaint", "Pertain", "Pattern"],answer: 0,explanation: "Rearranging 'RAPETNIE' spells 'Painter.'"},
{question: "What is the missing number: 1, 1, 2, 3, 5, ?, 13.",options: ["6", "7", "8", "9"],answer: 2,explanation: "This is the Fibonacci sequence where each number is the sum of the two preceding ones."},
{question: "A clock strikes once at 1 o'clock, twice at 2 o'clock, and so on. How many times will it strike in 24 hours?",options: ["78", "156", "144", "120"],answer: 1,explanation: "Sum of strikes in 12 hours is 1+2+...+12 = 78. In 24 hours, it strikes twice: 78 × 2 = 156."},

  ],
  verbal: [
    {
      question: "Choose the synonym of 'fast'.",
      options: ["Slow", "Quick", "Late", "Dull"],
      answer: 1,
      explanation: "'Quick' is a synonym for 'fast.'"
    },
    {
      question: "Choose the antonym of 'happy'.",
      options: ["Sad", "Joyful", "Angry", "Confused"],
      answer: 0,
      explanation: "The antonym of 'happy' is 'sad.'"
    },
    { question: "Choose the synonym of 'fast'.", options: ["Slow", "Quick", "Late", "Dull"], answer: 1, explanation: "'Quick' is a synonym for 'fast.'" },
{ question: "Choose the antonym of 'happy'.", options: ["Sad", "Joyful", "Angry", "Confused"], answer: 0, explanation: "The antonym of 'happy' is 'sad.'" },
{ question: "Identify the verb in this sentence: 'She runs quickly.'", options: ["She", "Runs", "Quickly", "None"], answer: 1, explanation: "The verb in the sentence is 'runs.'" },
{ question: "Choose the correct spelling:", options: ["Definately", "Definitely", "Definetly", "Defanitely"], answer: 1, explanation: "'Definitely' is the correct spelling." },
{ question: "Find the correct word: He _______ the job offer.", options: ["accept", "accepts", "accepted", "accepting"], answer: 2, explanation: "'Accepted' is correct in past tense." },
{question: "Choose the correct synonym for 'begin'.",options: ["Stop", "Start", "End", "Halt"],answer: 1,explanation: "'Start' is a synonym for 'begin.'"},
{question: "Choose the antonym of 'freedom'.",options: ["Liberty", "Independence", "Captivity", "Choice"],answer: 2,explanation: "The antonym of 'freedom' is 'captivity.'"},
{question: "Identify the noun in this sentence: 'The dog barked loudly.'",options: ["Dog", "Barked", "Loudly", "The"],answer: 0,explanation: "'Dog' is the noun in the sentence."},
{question: "Find the correctly spelled word:",options: ["Accomodate", "Acommodate", "Accommodate", "Accomadate"],answer: 2,explanation: "'Accommodate' is the correct spelling."},
{question: "Fill in the blank: She _______ to the market yesterday.",options: ["go", "went", "gone", "going"],answer: 1,explanation: "'Went' is the correct past tense form of 'go.'"},
{question: "Choose the synonym of 'Large'.",options: ["Big", "Small", "Tiny", "Narrow"],answer: 0,explanation: "'Big' is a synonym for 'Large.'"},
{ question: "Identify the adverb: 'The train arrived late.'",options: ["Train", "Arrived", "Late", "The"],answer: 2,explanation: "'Late' is the adverb as it modifies the verb 'arrived.'"},
{question: "Which is the correctly spelled word?",options: ["Occured", "Occurred", "Ocurred", "Ocurred"],answer: 1,explanation: "'Occurred' is the correct spelling."},
{question: "Fill in the blank: The baby _______ crying all night.",options: ["was", "were", "is", "are"],answer: 0,explanation: "'Was' is the correct past continuous auxiliary verb."},
{question: "Find the correct word: The teacher was _______ about the exam date.",options: ["certain", "confused", "late", "angry"],answer: 0,explanation: "'Certain' correctly fits the sentence."},
{ question: "Choose the synonym of 'angry'.", options: ["Calm", "Furious", "Quiet", "Happy"],answer: 1, explanation: "'Furious' is a synonym for 'angry.'"},
{ question: "Choose the antonym of 'cheap'.", options: ["Expensive", "Affordable", "Low", "Costly"],answer: 0,explanation: "The antonym of 'cheap' is 'expensive.'"},
{ question: "Identify the noun in this sentence: 'The dog barked loudly.'", options: ["Dog", "Barked", "Loudly", "The"], answer: 0, explanation: "'Dog' is a noun because it names an animal."},
{ question: "Which word is misspelled?", options: ["Separate", "Occassion", "Receive", "Friend"], answer: 1,"explanation": "The correct spelling is 'Occasion.'" },
{ question: "Complete the sentence: 'She ___ her homework before dinner.'", option: ["Do", "Did", "Does", "Doing"], answer: 1,explanation: "The correct form is 'She did her homework before dinner.'" },
{ question: "Choose the synonym of 'intelligent'.", options: ["Dull", "Smart", "Slow", "Lazy"],answer: 1, explanation: "'Smart' is a synonym for 'intelligent.'"},
{ question: "Choose the antonym of 'begin'.",options: ["End", "Start", "Initiate", "Proceed"], answer: 0, explanation: "The antonym of 'begin' is 'end.'" },
{ 
  "question": "Identify the adjective in this sentence: 'The blue sky looked beautiful.'", 
  "options": ["Sky", "Blue", "Looked", "Beautiful"], 
  "answer": 1, 
  "explanation": "The adjective is 'blue' because it describes the sky." 
},
{ 
  "question": "What does 'generous' mean?", 
  "options": ["Kind", "Mean", "Selfish", "Rude"], 
  "answer": 0, 
  "explanation": "'Generous' means kind and willing to give to others." 
},
{ 
  "question": "What is the plural of 'mouse'?", 
  "options": ["Mouse", "Mice", "Mouses", "Mousees"], 
  "answer": 1, 
  "explanation": "The correct plural form of 'mouse' is 'mice.'" 
},
{ 
  "question": "Choose the correct article: '___ umbrella is useful in the rain.'", 
  "options": ["A", "An", "The", "No article"], 
  "answer": 1, 
  "explanation": "We use 'an' before words that start with a vowel sound, like 'umbrella.'" 
},
{ 
  "question": "What is the opposite of 'cold'?", 
  "options": ["Hot", "Warm", "Cool", "Chilly"], 
  "answer": 0, 
  "explanation": "The opposite of 'cold' is 'hot.'" 
},
{ 
  "question": "What is the correct spelling?", 
  "options": ["Accomodate", "Accommodate", "Acomodate", "Accomadate"], 
  "answer": 1, 
  "explanation": "'Accommodate' is the correct spelling." 
},
{ 
  "question": "Choose the synonym of 'large'.", 
  "options": ["Tiny", "Huge", "Small", "Narrow"], 
  "answer": 1, 
  "explanation": "'Huge' is a synonym for 'large.'" 
},
{ 
  "question": "Identify the verb in this sentence: 'He sings beautifully.'", 
  "options": ["He", "Sings", "Beautifully", "None"], 
  "answer": 1, 
  "explanation": "The verb in the sentence is 'sings.'" 
},
{ 
  "question": "What does 'ambitious' mean?", 
  "options": ["Lazy", "Determined", "Sad", "Calm"], 
  "answer": 1, 
  "explanation": "'Ambitious' means having a strong desire to achieve success." 
},
{ 
  "question": "Which of these is a preposition?", 
  "options": ["On", "Run", "Fast", "Play"], 
  "answer": 0, 
  "explanation": "'On' is a preposition because it shows a relationship between words." 
},
{ 
  "question": "What is the superlative form of 'happy'?", 
  "options": ["Happiest", "Happier", "Most Happy", "More Happy"], 
  "answer": 0, 
  "explanation": "The superlative form of 'happy' is 'happiest.'" 
},
{ 
  "question": "Choose the correct sentence.", 
  "options": ["She speak well.", "She speaks well.", "She speaking well.", "She spoke well."], 
  "answer": 1, 
  "explanation": "The correct sentence is 'She speaks well.'" 
},
{ 
  "question": "Choose the antonym of 'beautiful'.", 
  "options": ["Pretty", "Ugly", "Lovely", "Charming"], 
  "answer": 1, 
  "explanation": "The antonym of 'beautiful' is 'ugly.'" 
},
{ 
  "question": "What is the plural of 'tooth'?", 
  "options": ["Tooths", "Teeth", "Toothes", "Tooth"], 
  "answer": 1, 
  "explanation": "The correct plural form of 'tooth' is 'teeth.'" 
},
{ 
  "question": "What does 'fortunate' mean?", 
  "options": ["Lucky", "Unlucky", "Angry", "Happy"], 
  "answer": 0, 
  "explanation": "'Fortunate' means lucky or having good fortune." 
},
{ 
  "question": "Choose the correct article: '___ honest person always speaks the truth.'", 
  "options": ["A", "An", "The", "No article"], 
  "answer": 1, 
  "explanation": "We use 'an' before words that start with a vowel sound, like 'honest.'" 
},
{ 
  "question": "Which of these is a conjunction?", 
  "options": ["Because", "Fast", "Walk", "She"], 
  "answer": 0, 
  "explanation": "'Because' is a conjunction as it connects ideas." 
},
{ 
  "question": "What is the comparative form of 'bad'?", 
  "options": ["Worse", "Worst", "Bader", "Bad"], 
  "answer": 0, 
  "explanation": "The comparative form of 'bad' is 'worse.'" 
},
{ 
  "question": "What is the opposite of 'increase'?", 
  "options": ["Reduce", "Expand", "Raise", "Grow"], 
  "answer": 0, 
  "explanation": "The opposite of 'increase' is 'reduce.'" 
},
{ 
  "question": "Identify the adverb in this sentence: 'He runs very fast.'", 
  "options": ["Runs", "Very", "Fast", "He"], 
  "answer": 2, 
  "explanation": "'Fast' is the adverb because it modifies the verb 'runs.'" 
},
{
  "question": "What is the past tense of 'run'?", 
  "options": ["Ran", "Run", "Running", "Runs"], 
  "answer": 0, 
  "explanation": "The past tense of 'run' is 'ran.'" 
},
{ 
  "question": "Choose the antonym of 'light'.", 
  "options": ["Heavy", "Bright", "Dark", "Soft"], 
  "answer": 0, 
  "explanation": "The antonym of 'light' is 'heavy.'" 
},
{ 
  "question": "Identify the pronoun in this sentence: 'He gave her the book.'", 
  "options": ["He", "Gave", "Book", "Her"], 
  "answer": 0, 
  "explanation": "'He' is a pronoun as it replaces a noun." 
},
{ 
  "question": "Which word is misspelled?", 
  "options": ["Achievement", "Recieve", "Embarrass", "Recommend"], 
  "answer": 1, 
  "explanation": "The correct spelling is 'Receive.'" 
},
{ 
  "question": "Complete the sentence: 'They ___ a movie last night.'", 
  "options": ["Watch", "Watched", "Watching", "Watches"], 
  "answer": 1, 
  "explanation": "The correct form is 'They watched a movie last night.'" 
},
{ 
  "question": "Choose the synonym of 'difficult'.", 
  "options": ["Challenging", "Easy", "Simple", "Basic"], 
  "answer": 0, 
  "explanation": "'Challenging' is a synonym for 'difficult.'" 
},
{ 
  "question": "What does 'courageous' mean?", 
  "options": ["Fearful", "Brave", "Cowardly", "Nervous"], 
  "answer": 1, 
  "explanation": "'Courageous' means brave or having courage." 
},
{ 
  "question": "What is the plural of 'deer'?", 
  "options": ["Deers", "Deer", "Deeres", "Deeries"], 
  "answer": 1, 
  "explanation": "The correct plural form of 'deer' is 'deer.'" 
},
  ],
  quantitative: [
    {
      question: "What is 5 + 7?",
      options: ["11", "12", "13", "14"],
      answer: 1,
      explanation: "5 + 7 = 12."
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "8", "7", "9"],
      answer: 1,
      explanation: "The square root of 64 is 8."
    },
    { question: "What is 25% of 200?", options: ["25", "50", "75", "100"], answer: 1, explanation: "25% of 200 is 50." },
    { question: "Solve: 12 × 15.", options: ["180", "120", "150", "200"], answer: 0, explanation: "12 × 15 = 180." },
    { question: "If a train travels 60 km in 1 hour, how far will it travel in 3 hours?", options: ["120 km", "150 km", "180 km", "200 km"], answer: 2, explanation: "60 km × 3 = 180 km." },
    { question: "Simplify: 45 ÷ 5 × 3.", options: ["9", "15", "27", "25"], answer: 2, explanation: "45 ÷ 5 = 9, then 9 × 3 = 27." },
    { question: "Find the average of: 10, 20, 30, 40, 50.", options: ["20", "30", "40", "25"], answer: 1, explanation: "The sum is 150; divide by 5 to get 30." },
    { 
      "question": "What is the value of 15 + 28?", 
      "options": ["33", "42", "43", "53"], 
      "answer": 2, 
      "explanation": "Adding 15 and 28 gives 43." 
    },
    { 
      "question": "Simplify: 8 × (6 + 4) ÷ 2.", 
      "options": ["20", "24", "32", "40"], 
      "answer": 3, 
      "explanation": "Using BODMAS: 8 × 10 ÷ 2 = 80 ÷ 2 = 40." 
    },
    { 
      "question": "A train travels 240 km in 3 hours. What is its average speed?", 
      "options": ["60 km/h", "70 km/h", "80 km/h", "90 km/h"], 
      "answer": 0, 
      "explanation": "Average speed = Distance ÷ Time = 240 ÷ 3 = 60 km/h." 
    },
    { 
      "question": "If a bag contains 8 red balls and 12 blue balls, what is the probability of picking a red ball?", 
      "options": ["2/5", "1/2", "3/5", "4/5"], 
      "answer": 0, 
      "explanation": "Probability = Favorable outcomes / Total outcomes = 8 / (8 + 12) = 8 / 20 = 2/5." 
    },
    { 
      "question": "Find the simple interest on $5000 at 5% per annum for 2 years.", 
      "options": ["$250", "$400", "$500", "$1000"], 
      "answer": 2, 
      "explanation": "Simple Interest = (P × R × T) / 100 = (5000 × 5 × 2) / 100 = $500." 
    },
    { 
      "question": "What is the LCM of 12 and 15?", 
      "options": ["45", "60", "75", "90"], 
      "answer": 1, 
      "explanation": "The LCM of 12 and 15 is 60." 
    },
    { 
      "question": "A car travels 300 km in 5 hours. What is its speed in meters per second?", 
      "options": ["12 m/s", "15 m/s", "16 m/s", "18 m/s"], 
      "answer": 1, 
      "explanation": "Speed = Distance / Time = 300 km ÷ 5 h = 60 km/h = (60 × 1000) / 3600 = 16.67 m/s ≈ 15 m/s." 
    },
    { 
      "question": "If 5x = 20, what is the value of x?", 
      "options": ["2", "3", "4", "5"], 
      "answer": 2, 
      "explanation": "Dividing both sides by 5, x = 20 ÷ 5 = 4." 
    },
    { 
      "question": "A man spends 25% of his income on rent. If his income is $4000, how much does he spend on rent?", 
      "options": ["$500", "$1000", "$1500", "$2000"], 
      "answer": 1, 
      "explanation": "25% of $4000 = (25/100) × 4000 = $1000." 
    },
    { 
      "question": "If the perimeter of a square is 40 cm, what is the length of each side?", 
      "options": ["5 cm", "8 cm", "10 cm", "12 cm"], 
      "answer": 2, 
      "explanation": "Perimeter of a square = 4 × side. So, side = Perimeter ÷ 4 = 40 ÷ 4 = 10 cm." 
    },
  
  
    {
      "question": "Simplify: 25 × 4 ÷ 5.",
      "options": ["10", "20", "30", "40"],
      "answer": 1,
      "explanation": "Using BODMAS: 25 × 4 ÷ 5 = 100 ÷ 5 = 20."
    },
    {
      "question": "If a number is multiplied by 3 and then 12 is added, the result is 27. What is the number?",
      "options": ["3", "5", "7", "9"],
      "answer": 1,
      "explanation": "Let the number be x. 3x + 12 = 27 → 3x = 15 → x = 5."
    },
    {
      "question": "What is the square root of 144?",
      "options": ["10", "11", "12", "14"],
      "answer": 2,
      "explanation": "The square root of 144 is 12."
    },
    {
      "question": "What is the value of 2³ + 3²?",
      "options": ["17", "11", "13", "15"],
      "answer": 0,
      "explanation": "2³ = 8 and 3² = 9. Adding them gives 8 + 9 = 17."
    },
    {
      "question": "If a train is 200 m long and crosses a pole in 10 seconds, what is its speed in m/s?",
      "options": ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
      "answer": 2,
      "explanation": "Speed = Distance ÷ Time = 200 ÷ 10 = 20 m/s."
    },
    {
      "question": "The ratio of ages of A and B is 3:5. If their total age is 40 years, what is A's age?",
      "options": ["12", "15", "18", "20"],
      "answer": 1,
      "explanation": "The ratio 3:5 means A = (3/8) × 40 = 15 years."
    },
    {
      "question": "Find the value of x: 2x + 5 = 15.",
      "options": ["5", "6", "7", "8"],
      "answer": 0,
      "explanation": "2x = 15 - 5 → 2x = 10 → x = 10 ÷ 2 = 5."
    },
    {
      "question": "What is the HCF of 36 and 48?",
      "options": ["6", "9", "12", "18"],
      "answer": 2,
      "explanation": "The highest common factor (HCF) of 36 and 48 is 12."
    },
    {
      "question": "If a man can complete a job in 12 days, how much of the job does he complete in 3 days?",
      "options": ["1/3", "1/4", "1/6", "1/12"],
      "answer": 2,
      "explanation": "Work done in 3 days = 3 ÷ 12 = 1/4."
    },
    {
      "question": "The area of a rectangle is 48 sq. units. If its length is 8 units, what is its breadth?",
      "options": ["4", "5", "6", "7"],
      "answer": 2,
      "explanation": "Area = Length × Breadth → Breadth = Area ÷ Length = 48 ÷ 8 = 6 units."
    },
    {
      "question": "A shopkeeper buys an item for $500 and sells it for $600. What is his profit percentage?",
      "options": ["10%", "20%", "25%", "30%"],
      "answer": 1,
      "explanation": "Profit = (Selling Price - Cost Price) / Cost Price × 100 = (600 - 500) ÷ 500 × 100 = 20%."
    },
    {
      "question": "If 5 men can complete a task in 12 days, how long will it take for 10 men to complete the same task?",
      "options": ["3 days", "6 days", "9 days", "12 days"],
      "answer": 1,
      "explanation": "Work is inversely proportional to the number of men: (5 × 12) = (10 × x) → x = 6 days."
    },
    {
      "question": "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?",
      "options": ["10%", "12.5%", "15%", "25%"],
      "answer": 1,
      "explanation": "Rate = (100 × SI) / (P × T) = (100 × P) / (P × 8) = 12.5%."
    },
    {
      "question": "The average of five numbers is 25. If one number is removed, the average becomes 20. What is the removed number?",
      "options": ["30", "35", "40", "45"],
      "answer": 2,
      "explanation": "Total of 5 numbers = 25 × 5 = 125. Total of 4 numbers = 20 × 4 = 80. Removed number = 125 - 80 = 40."
    },
    {
      "question": "The perimeter of a circle is 44 cm. What is its radius? (π = 22/7)",
      "options": ["7 cm", "14 cm", "21 cm", "28 cm"],
      "answer": 0,
      "explanation": "Perimeter = 2πr → 44 = 2 × 22/7 × r → r = 7 cm."
    },
    {
      "question": "What is the compound interest on $10,000 at 10% per annum for 2 years, compounded annually?",
      "options": ["$1,000", "$2,000", "$2,100", "$2,200"],
      "answer": 2,
      "explanation": "Compound Interest = P(1 + r/100)^t - P = 10000(1 + 10/100)^2 - 10000 = $2,100."
    },
    {
      "question": "If the ratio of boys to girls in a class is 3:2 and there are 45 students, how many boys are there?",
      "options": ["15", "18", "27", "30"],
      "answer": 2,
      "explanation": "Total parts = 3 + 2 = 5. Boys = (3/5) × 45 = 27."
    },
    {
      "question": "A pipe can fill a tank in 5 hours, and another pipe can empty it in 10 hours. How long will it take to fill the tank if both are open?",
      "options": ["10 hours", "7 hours", "6 hours", "5 hours"],
      "answer": 2,
      "explanation": "Net rate = 1/5 - 1/10 = 1/10. Time = 1 ÷ (1/10) = 10 hours."
    },
    {
      "question": "A person invests $5,000 at a rate of 8% compounded annually. What is the amount after 3 years?",
      "options": ["$5,000", "$6,200", "$6,480", "$6,800"],
      "answer": 2,
      "explanation": "Amount = P(1 + r/100)^t = 5000(1 + 8/100)^3 = $6,480."
    },
    {
      "question": "Two numbers have a sum of 80, and their ratio is 3:5. What is the larger number?",
      "options": ["30", "40", "50", "60"],
      "answer": 1,
      "explanation": "The ratio 3:5 means numbers are 3x and 5x. 3x + 5x = 80 → x = 10. Larger number = 5x = 50."
    },
  
    {
      "question": "What is the remainder when 253 is divided by 6?",
      "options": ["1", "2", "3", "4"],
      "answer": 2,
      "explanation": "253 ÷ 6 = 42 remainder 3. So, the remainder is 3."
    },
    {
      "question": "The ratio of the ages of a father and his son is 5:2. If the father is 35 years old, what is the son's age?",
      "options": ["10", "12", "14", "15"],
      "answer": 3,
      "explanation": "Ratio = 5:2 → Son's age = (2/5) × 35 = 14 years."
    },
    {
      "question": "Find the value of x if 4x - 7 = 25.",
      "options": ["6", "7", "8", "9"],
      "answer": 2,
      "explanation": "4x = 25 + 7 → 4x = 32 → x = 32 ÷ 4 = 8."
    },
    {
      "question": "If the perimeter of an equilateral triangle is 24 cm, what is the length of each side?",
      "options": ["6 cm", "8 cm", "12 cm", "24 cm"],
      "answer": 1,
      "explanation": "Perimeter = 3 × side → Side = 24 ÷ 3 = 8 cm."
    },
    {
      "question": "What is the area of a circle with radius 7 cm? (π = 22/7)",
      "options": ["132 cm²", "144 cm²", "154 cm²", "168 cm²"],
      "answer": 2,
      "explanation": "Area = πr² = (22/7) × 7 × 7 = 154 cm²."
    },
    {
      "question": "A man walks at a speed of 5 km/h. How much time will he take to cover 20 km?",
      "options": ["2 hours", "3 hours", "4 hours", "5 hours"],
      "answer": 3,
      "explanation": "Time = Distance ÷ Speed = 20 ÷ 5 = 4 hours."
    },
    {
      "question": "The cost price of an article is $500. If it is sold at a loss of 20%, what is the selling price?",
      "options": ["$400", "$450", "$480", "$500"],
      "answer": 0,
      "explanation": "Selling Price = Cost Price × (1 - Loss %) = $500 × 0.8 = $400."
    },
    {
      "question": "What is the cube root of 216?",
      "options": ["4", "5", "6", "7"],
      "answer": 2,
      "explanation": "The cube root of 216 is 6 because 6 × 6 × 6 = 216."
    },
    {
      "question": "If a sum of money triples itself in 10 years at simple interest, what is the rate of interest?",
      "options": ["10%", "20%", "30%", "40%"],
      "answer": 2,
      "explanation": "Simple Interest = 2P (Triples itself means SI = 2P). Rate = (100 × SI) / (P × T) = (100 × 2P) / (P × 10) = 20%."
    },
    {
      "question": "A train 120 meters long passes a pole in 12 seconds. What is its speed in km/h?",
      "options": ["30 km/h", "36 km/h", "40 km/h", "42 km/h"],
      "answer": 1,
      "explanation": "Speed = Distance ÷ Time = 120 ÷ 12 = 10 m/s = 10 × 3.6 = 36 km/h."
    },
    {
      "question": "The product of two numbers is 72, and their HCF is 6. What is their LCM?",
      "options": ["6", "12", "36", "72"],
      "answer": 2,
      "explanation": "HCF × LCM = Product of numbers → 6 × LCM = 72 → LCM = 72 ÷ 6 = 12."
    },
    {
      "question": "If 40% of a number is 80, what is the number?",
      "options": ["100", "150", "200", "250"],
      "answer": 2,
      "explanation": "40% of x = 80 → x = 80 ÷ 0.4 = 200."
    },
    {
      "question": "What is the probability of getting a 3 or a 5 when rolling a die?",
      "options": ["1/6", "1/3", "1/2", "2/6"],
      "answer": 1,
      "explanation": "Probability = Favorable outcomes ÷ Total outcomes = 2 ÷ 6 = 1/3."
    },
    {
      "question": "If a car’s value depreciates by 10% annually and its current value is $18,000, what will it be worth after one year?",
      "options": ["$16,200", "$17,000", "$15,800", "$18,000"],
      "answer": 0,
      "explanation": "Value after 1 year = $18,000 × (1 - 10/100) = $18,000 × 0.9 = $16,200."
    },
  ]
  
};


let currentSection = "";
let currentQuestionIndex = 0;function updateProgressBar() {
const progress = (currentQuestionIndex / sections[currentSection].length) * 100;
document.getElementById("progress-bar").style.width = `${progress}%`;
}

function loadQuestion() {
updateProgressBar();

}

let score = 0;


function startSection(section) {
  currentSection = section;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("section-selection").classList.add("hidden");
  document.getElementById("test-container").classList.remove("hidden");
  loadQuestion();
}


function loadQuestion() {
  const questionData = sections[currentSection][currentQuestionIndex];
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `<h3>${questionData.question}</h3>`;
  questionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    questionContainer.appendChild(button);
  });
  document.getElementById("next-button").classList.add("hidden");
}


function checkAnswer(selectedIndex) {
  const questionData = sections[currentSection][currentQuestionIndex];
  const explanation = questionData.explanation;
  const questionContainer = document.getElementById("question-container");

  if (selectedIndex === questionData.answer) {
    score++;
    alert("Correct! " + explanation);
  } else {
    alert("Wrong! " + explanation);
  }

  document.getElementById("next-button").classList.remove("hidden");
}


function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < sections[currentSection].length) {
    loadQuestion();
  } else {
    showResults();
  }
}


function showResults() {
  document.getElementById("test-container").classList.add("hidden");
  const resultContainer = document.getElementById("result");
  resultContainer.classList.remove("hidden");
  document.getElementById("score-display").textContent = `You scored ${score} out of ${sections[currentSection].length}.`;
}


function restartTest() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("section-selection").classList.remove("hidden");
}
