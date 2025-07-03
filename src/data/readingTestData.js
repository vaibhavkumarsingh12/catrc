// Reading test data with different difficulty levels
export const readingTestData = [
  // EASY LEVEL TEXTS
  {
    id: 1,
    title: "The Benefits of Regular Exercise",
    difficulty: "Easy",
    level: "easy",
    estimatedWPM: 200,
    text: `Regular exercise is one of the most important things you can do for your health. It provides numerous benefits for both your physical and mental well-being. When you exercise regularly, your heart becomes stronger and more efficient at pumping blood throughout your body.

Physical benefits of exercise include improved cardiovascular health, stronger muscles and bones, and better flexibility. Exercise also helps maintain a healthy weight by burning calories and building muscle mass. Additionally, regular physical activity can boost your immune system, making you less likely to get sick.

Mental health benefits are equally important. Exercise releases endorphins, which are natural mood elevators that can help reduce stress and anxiety. Many people find that regular exercise helps them sleep better at night and feel more energetic during the day. It can also improve self-confidence and provide a sense of accomplishment.

You don't need to spend hours at the gym to get these benefits. Even simple activities like walking, swimming, or dancing can make a significant difference. The key is consistency rather than intensity. Health experts recommend at least 150 minutes of moderate exercise per week, which can be broken down into just 30 minutes, five days a week.

Starting an exercise routine can be challenging, but setting realistic goals and finding activities you enjoy can help you stick with it. Consider exercising with friends or family members to make it more enjoyable and hold yourself accountable. Remember, any amount of exercise is better than none, so start small and gradually increase your activity level as you build strength and endurance.`,
    questions: [
      {
        question: "What are endorphins?",
        options: ["Vitamins", "Natural mood elevators", "Proteins", "Minerals"],
        correct: 1
      },
      {
        question: "How many minutes of exercise per week do experts recommend?",
        options: ["100 minutes", "120 minutes", "150 minutes", "200 minutes"],
        correct: 2
      },
      {
        question: "According to the passage, what is more important than intensity?",
        options: ["Speed", "Consistency", "Equipment", "Location"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    title: "The History of the Internet",
    difficulty: "Easy",
    level: "easy",
    estimatedWPM: 180,
    text: `The internet has become an essential part of our daily lives, but its history began more than fifty years ago. The foundation of the internet was laid in the 1960s when the U.S. Department of Defense created a network called ARPANET. This network was designed to connect computers at different universities and research institutions.

The original purpose of ARPANET was to share information and resources between researchers. However, the network had an important secondary benefit: it could continue to function even if some of its connections were damaged. This feature made it valuable for military and government communications during the Cold War era.

In the 1970s and 1980s, the network expanded beyond military and academic use. More universities and organizations joined the network, and new technologies were developed to make communication easier and more efficient. The invention of email in the early 1970s was particularly important, as it gave people a practical reason to use the network.

The 1990s brought the most significant changes to the internet. The World Wide Web was invented by Tim Berners-Lee, making it much easier for ordinary people to access and share information online. Web browsers like Mosaic and later Netscape made the internet user-friendly for non-technical users.

Today, the internet connects billions of people around the world. It has revolutionized how we communicate, work, learn, and entertain ourselves. From social media to online shopping, streaming services to video calls, the internet has transformed nearly every aspect of modern life. What started as a simple network for researchers has become one of the most important technologies in human history.`,
    questions: [
      {
        question: "What was the original network that led to the internet called?",
        options: ["INTERNET", "ARPANET", "WEBNET", "TECHNET"],
        correct: 1
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"],
        correct: 2
      },
      {
        question: "When was email invented according to the passage?",
        options: ["Early 1960s", "Early 1970s", "Early 1980s", "Early 1990s"],
        correct: 1
      }
    ]
  },
  {
    id: 3,
    title: "The Science of Sleep",
    difficulty: "Easy",
    level: "easy",
    estimatedWPM: 190,
    text: `Sleep is a natural process that is essential for our physical and mental health. During sleep, our bodies repair themselves and our brains process the information we learned during the day. Most adults need between seven and nine hours of sleep each night to function properly.

Sleep occurs in different stages, each serving important functions. The first stage is light sleep, where we begin to relax and our heart rate slows down. The second stage is deeper sleep, where our body temperature drops and our brain waves become slower. The third and fourth stages are the deepest levels of sleep, when our bodies do most of their repair work.

REM sleep, which stands for Rapid Eye Movement, is perhaps the most interesting stage. During REM sleep, our brains are very active, and this is when most of our dreaming occurs. This stage is crucial for memory consolidation and emotional processing. We typically cycle through all these stages several times during a full night's sleep.

Poor sleep can have serious consequences for our health. People who don't get enough sleep often experience difficulty concentrating, mood changes, and weakened immune systems. Chronic sleep deprivation has been linked to serious health problems including heart disease, diabetes, and depression.

To improve sleep quality, experts recommend maintaining a regular sleep schedule, creating a comfortable sleep environment, and avoiding caffeine and electronic devices before bedtime. Regular exercise can also help improve sleep, but it's best to avoid vigorous activity close to bedtime. Good sleep hygiene is an investment in your overall health and well-being.`,
    questions: [
      {
        question: "How many hours of sleep do most adults need?",
        options: ["5-6 hours", "6-7 hours", "7-9 hours", "9-10 hours"],
        correct: 2
      },
      {
        question: "What does REM stand for?",
        options: ["Rapid Eye Movement", "Rest and Energy Mode", "Relaxed Evening Mode", "Repair and Maintenance"],
        correct: 0
      },
      {
        question: "When does most dreaming occur?",
        options: ["Light sleep", "Deep sleep", "REM sleep", "All stages equally"],
        correct: 2
      }
    ]
  },

  // MODERATE LEVEL TEXTS
  {
    id: 4,
    title: "The Future of Renewable Energy",
    difficulty: "Moderate",
    level: "moderate",
    estimatedWPM: 250,
    text: `The transition to renewable energy sources represents one of the most significant technological and economic shifts of the 21st century. As concerns about climate change intensify and fossil fuel reserves dwindle, governments and corporations worldwide are investing heavily in sustainable energy solutions. This transformation is not merely an environmental imperative but also an economic opportunity that could reshape global energy markets.

Solar and wind power have emerged as the most promising renewable technologies, with costs plummeting dramatically over the past decade. The levelized cost of electricity from solar photovoltaic systems has decreased by over 80% since 2010, making it competitive with or cheaper than fossil fuels in many regions. Wind energy has experienced similar cost reductions, particularly in offshore installations where consistent wind patterns provide reliable power generation.

Energy storage technology represents the next frontier in renewable energy development. Battery technology, particularly lithium-ion batteries, has improved significantly in both capacity and affordability. However, the intermittent nature of renewable sources necessitates more sophisticated storage solutions. Emerging technologies such as pumped hydro storage, compressed air energy storage, and green hydrogen production offer promising alternatives for long-term energy storage.

The integration of renewable energy into existing power grids presents both technical and regulatory challenges. Smart grid technologies, which use digital communications to optimize electricity distribution, are essential for managing the variable output of renewable sources. Additionally, policy frameworks must evolve to accommodate distributed energy generation and encourage investment in renewable infrastructure.

Despite these challenges, the renewable energy sector continues to grow rapidly. International agreements such as the Paris Climate Accord have created momentum for clean energy adoption, while technological innovations continue to improve efficiency and reduce costs. The transition to renewable energy is not just about environmental protection; it represents a fundamental shift toward a more sustainable and economically viable energy future.`,
    questions: [
      {
        question: "By what percentage has the cost of solar photovoltaic systems decreased since 2010?",
        options: ["Over 60%", "Over 70%", "Over 80%", "Over 90%"],
        correct: 2
      },
      {
        question: "What is identified as the next frontier in renewable energy development?",
        options: ["Solar power", "Wind power", "Energy storage technology", "Nuclear power"],
        correct: 2
      },
      {
        question: "What do smart grid technologies use to optimize electricity distribution?",
        options: ["Analog communications", "Digital communications", "Satellite communications", "Radio communications"],
        correct: 1
      },
      {
        question: "According to the passage, what makes the transition to renewable energy significant?",
        options: ["Only environmental reasons", "Only economic reasons", "Both environmental and economic reasons", "Only technological reasons"],
        correct: 2
      }
    ]
  },
  {
    id: 5,
    title: "The Psychology of Decision Making",
    difficulty: "Moderate",
    level: "moderate",
    estimatedWPM: 240,
    text: `Human decision-making is a complex cognitive process that involves multiple psychological factors and can be influenced by various biases and heuristics. Traditional economic theory assumes that individuals make rational choices by carefully weighing costs and benefits, but decades of psychological research have revealed that our decisions are often far from rational.

Cognitive biases play a significant role in shaping our choices. The availability heuristic, for instance, leads us to overestimate the likelihood of events that are easily recalled, often because they are recent or emotionally significant. This bias can cause people to overestimate the danger of airplane crashes while underestimating the risk of more common but less memorable events like car accidents.

Another important bias is confirmation bias, which causes us to seek out information that confirms our existing beliefs while ignoring contradictory evidence. This tendency can lead to poor decision-making in various contexts, from personal relationships to business strategies. In today's information-rich environment, where we can easily find sources supporting virtually any viewpoint, confirmation bias has become particularly problematic.

The framing effect demonstrates how the presentation of information can dramatically influence our choices. The same information can lead to different decisions depending on whether it's framed in terms of gains or losses. For example, a medical treatment described as having a "90% success rate" is more appealing than one with a "10% failure rate," even though these statements are mathematically equivalent.

Loss aversion, another fundamental bias, explains why people typically feel the pain of losing something more acutely than the pleasure of gaining something of equal value. This asymmetry can lead to overly conservative decision-making and resistance to change, even when change would be beneficial. Understanding these psychological principles can help us make better decisions by recognizing when our judgment might be clouded by cognitive biases.`,
    questions: [
      {
        question: "What does the availability heuristic lead us to do?",
        options: ["Underestimate all risks", "Overestimate easily recalled events", "Make purely rational decisions", "Ignore recent information"],
        correct: 1
      },
      {
        question: "What is confirmation bias?",
        options: ["Seeking information that confirms existing beliefs", "Making decisions based on emotions", "Avoiding difficult choices", "Overestimating probabilities"],
        correct: 0
      },
      {
        question: "What does loss aversion explain?",
        options: ["Why people take more risks", "Why people feel losses more acutely than gains", "Why people make rational decisions", "Why people ignore information"],
        correct: 1
      },
      {
        question: "According to the passage, what can help us make better decisions?",
        options: ["Relying on intuition", "Ignoring psychological research", "Understanding cognitive biases", "Following traditional economic theory"],
        correct: 2
      }
    ]
  },
  {
    id: 6,
    title: "The Evolution of Artificial Intelligence",
    difficulty: "Moderate",
    level: "moderate",
    estimatedWPM: 260,
    text: `Artificial Intelligence has evolved from a theoretical concept in computer science to a practical technology that influences nearly every aspect of modern life. The field's origins can be traced back to the 1950s when pioneers like Alan Turing and John McCarthy began exploring the possibility of creating machines that could simulate human intelligence.

The early decades of AI research were characterized by ambitious goals and subsequent disappointments, leading to periods known as "AI winters" when funding and interest waned. Researchers initially believed that human-level intelligence could be achieved within a few decades, but the complexity of replicating human cognition proved far greater than anticipated. However, these setbacks led to more focused research and the development of specialized AI systems.

The 1980s marked a resurgence in AI development with the introduction of expert systems, which could make decisions in specific domains by applying rules derived from human expertise. While these systems were limited in scope, they demonstrated the practical value of AI in fields such as medical diagnosis and financial analysis. This period also saw the emergence of machine learning as a distinct approach to AI development.

The current era of AI has been driven primarily by advances in deep learning, a subset of machine learning that uses neural networks with multiple layers to process information. The availability of large datasets and increased computational power has enabled the development of AI systems that can recognize speech and images, translate languages, and even generate creative content with remarkable accuracy.

Today's AI applications extend far beyond technology companies. Healthcare professionals use AI to analyze medical images and predict disease outcomes, financial institutions employ it to detect fraud and assess credit risk, and autonomous vehicles rely on AI to navigate complex environments. As AI continues to evolve, questions about its societal impact, including concerns about job displacement and privacy, have become increasingly important in public discourse.`,
    questions: [
      {
        question: "What characterized the early decades of AI research?",
        options: ["Steady progress", "Ambitious goals and disappointments", "Limited funding", "Practical applications"],
        correct: 1
      },
      {
        question: "What are expert systems?",
        options: ["Systems that learn from data", "Systems that make decisions using rules from human expertise", "Systems that simulate human emotions", "Systems that create art"],
        correct: 1
      },
      {
        question: "What has primarily driven the current era of AI?",
        options: ["Expert systems", "Rule-based programming", "Deep learning advances", "Increased funding"],
        correct: 2
      },
      {
        question: "According to the passage, what questions have become important in public discourse?",
        options: ["Technical implementation details", "Societal impact including job displacement and privacy", "Programming languages used", "Hardware requirements"],
        correct: 1
      }
    ]
  },

  // HARD LEVEL TEXTS
  {
    id: 7,
    title: "Quantum Computing and Cryptography",
    difficulty: "Hard",
    level: "hard",
    estimatedWPM: 300,
    text: `Quantum computing represents a paradigm shift in computational methodology, leveraging the principles of quantum mechanics to process information in fundamentally different ways than classical computers. Unlike classical bits that exist in definite states of 0 or 1, quantum bits (qubits) can exist in superposition, simultaneously representing both states until measured. This quantum superposition, combined with entanglement—where qubits become correlated in ways that classical physics cannot explain—enables quantum computers to perform certain calculations exponentially faster than their classical counterparts.

The implications of quantum computing for cryptography are profound and potentially disruptive. Current cryptographic systems rely on the computational difficulty of certain mathematical problems, such as factoring large integers or solving discrete logarithm problems. The RSA encryption algorithm, which secures much of today's digital communication, depends on the fact that factoring the product of two large prime numbers is computationally infeasible for classical computers within reasonable time frames.

Shor's algorithm, developed by mathematician Peter Shor in 1994, demonstrates that a sufficiently powerful quantum computer could factor large integers exponentially faster than any known classical algorithm. This breakthrough has profound implications for cybersecurity, as it would render current public-key cryptographic systems obsolete. The timeline for developing quantum computers capable of breaking current encryption remains uncertain, but the potential threat has prompted significant investment in quantum-resistant cryptography research.

Post-quantum cryptography, also known as quantum-resistant cryptography, involves developing cryptographic algorithms that remain secure even against quantum computer attacks. These systems typically rely on mathematical problems that are believed to be difficult for both classical and quantum computers to solve. Lattice-based cryptography, hash-based signatures, and multivariate polynomial cryptography are among the leading approaches being investigated.

The National Institute of Standards and Technology (NIST) has been conducting a multi-year process to standardize post-quantum cryptographic algorithms. This standardization is crucial for ensuring interoperability and security in a post-quantum world. Organizations must begin planning for the transition to quantum-resistant systems now, as the migration process will be complex and time-consuming, requiring updates to protocols, standards, and infrastructure across numerous industries and applications.`,
    questions: [
      {
        question: "What property allows qubits to represent both 0 and 1 simultaneously?",
        options: ["Entanglement", "Superposition", "Interference", "Decoherence"],
        correct: 1
      },
      {
        question: "What mathematical problem does RSA encryption rely on for security?",
        options: ["Discrete logarithm problems", "Factoring large integers", "Solving polynomial equations", "Matrix multiplication"],
        correct: 1
      },
      {
        question: "What is Shor's algorithm designed to do?",
        options: ["Encrypt data", "Factor large integers", "Generate random numbers", "Compress information"],
        correct: 1
      },
      {
        question: "What organization is conducting the standardization process for post-quantum cryptography?",
        options: ["IEEE", "NIST", "IETF", "ISO"],
        correct: 1
      },
      {
        question: "According to the passage, why must organizations begin planning for quantum-resistant systems now?",
        options: ["Quantum computers already exist", "The migration process is complex and time-consuming", "Current systems are completely insecure", "Government regulations require it"],
        correct: 1
      }
    ]
  },
  {
    id: 8,
    title: "Neuroplasticity and Cognitive Enhancement",
    difficulty: "Hard",
    level: "hard",
    estimatedWPM: 320,
    text: `Neuroplasticity, the brain's remarkable ability to reorganize and form new neural connections throughout life, has revolutionized our understanding of cognitive development and rehabilitation. This phenomenon challenges the long-held belief that the adult brain is essentially fixed and immutable, instead revealing a dynamic organ capable of continuous adaptation in response to experience, learning, and environmental changes.

The mechanisms underlying neuroplasticity operate at multiple levels, from molecular changes in synaptic strength to large-scale cortical reorganization. Synaptic plasticity, the modification of connections between neurons, forms the cellular basis of learning and memory. Long-term potentiation (LTP) and long-term depression (LTD) represent the primary mechanisms by which synaptic connections are strengthened or weakened in response to patterns of neural activity. These processes are mediated by complex molecular cascades involving neurotransmitters, receptors, and gene expression changes.

Structural plasticity encompasses more dramatic changes, including the formation of new neurons (neurogenesis) and the growth of new neural connections (synaptogenesis). Adult neurogenesis, once thought to be impossible, has been documented in specific brain regions such as the hippocampus and subventricular zone. This process appears to be influenced by various factors including physical exercise, environmental enrichment, and stress levels, suggesting that lifestyle choices can directly impact brain structure and function.

The implications of neuroplasticity for cognitive enhancement and therapeutic interventions are profound. Cognitive training programs, based on the principle that mental exercises can strengthen neural networks, have shown promise in improving working memory, attention, and executive function. However, the transfer of these improvements to real-world tasks remains a subject of ongoing research and debate. Some studies suggest that training effects may be highly specific to practiced tasks, while others report broader cognitive benefits.

Pharmaceutical interventions targeting neuroplasticity mechanisms represent another frontier in cognitive enhancement. Nootropics, substances that purportedly enhance cognitive function, work through various mechanisms including modulation of neurotransmitter systems, enhancement of cerebral blood flow, and promotion of neuroprotective factors. While some compounds show promise in laboratory settings, the long-term safety and efficacy of cognitive enhancers in healthy individuals remain largely unknown, raising important ethical and regulatory questions about their use.`,
    questions: [
      {
        question: "What is neuroplasticity?",
        options: ["The brain's ability to heal from injury", "The brain's ability to reorganize and form new neural connections", "The brain's ability to process information", "The brain's ability to control movement"],
        correct: 1
      },
      {
        question: "What are the primary mechanisms of synaptic plasticity?",
        options: ["Neurogenesis and synaptogenesis", "LTP and LTD", "Axon growth and pruning", "Myelination and demyelination"],
        correct: 1
      },
      {
        question: "In which brain regions has adult neurogenesis been documented?",
        options: ["Hippocampus and subventricular zone", "Prefrontal cortex and cerebellum", "Amygdala and thalamus", "Brainstem and spinal cord"],
        correct: 0
      },
      {
        question: "What remains a subject of ongoing research regarding cognitive training?",
        options: ["Whether the brain can change", "The transfer of training effects to real-world tasks", "The existence of neuroplasticity", "The safety of mental exercises"],
        correct: 1
      },
      {
        question: "What questions do cognitive enhancers raise according to the passage?",
        options: ["Technical implementation questions", "Ethical and regulatory questions", "Manufacturing questions", "Distribution questions"],
        correct: 1
      }
    ]
  },
  {
    id: 9,
    title: "Climate Change and Ocean Acidification",
    difficulty: "Hard",
    level: "hard",
    estimatedWPM: 310,
    text: `Ocean acidification, colloquially termed the "other CO2 problem," represents one of the most significant yet underappreciated consequences of anthropogenic climate change. As atmospheric carbon dioxide concentrations continue to rise due to fossil fuel combustion and deforestation, approximately 30% of this excess CO2 is absorbed by the world's oceans, initiating a series of chemical reactions that fundamentally alter seawater chemistry and threaten marine ecosystems on a global scale.

The process of ocean acidification occurs through a well-understood chemical pathway. When CO2 dissolves in seawater, it forms carbonic acid (H2CO3), which subsequently dissociates to release hydrogen ions (H+) and bicarbonate ions (HCO3-). The increased concentration of hydrogen ions lowers the pH of seawater, making it more acidic. Since the Industrial Revolution, average ocean pH has decreased by approximately 0.1 units, representing a 30% increase in acidity due to the logarithmic nature of the pH scale.

The implications of this chemical change extend far beyond simple pH measurements. Marine organisms, particularly those that construct shells or skeletons from calcium carbonate—including corals, mollusks, echinoderms, and certain planktonic species—face unprecedented challenges. As ocean acidity increases, it becomes increasingly difficult for these organisms to extract carbonate ions (CO32-) from seawater to form calcium carbonate (CaCO3) structures. In severely acidified conditions, existing calcium carbonate structures may even begin to dissolve.

Coral reefs, which support approximately 25% of all marine species despite occupying less than 1% of ocean area, are particularly vulnerable to acidification. The combination of rising sea temperatures and decreasing pH creates a synergistic stress that has already resulted in widespread coral bleaching events. These ecosystems, which provide crucial services including coastal protection, fisheries support, and tourism revenue, face an uncertain future as ocean chemistry continues to change.

The economic ramifications of ocean acidification are equally concerning. The global shellfish industry, valued at billions of dollars annually, is already experiencing impacts from changing ocean chemistry. Pacific Northwest oyster farms have reported significant losses due to acidified waters, and similar problems are emerging in other regions. Commercial fisheries dependent on acid-sensitive species may face substantial disruptions as ocean chemistry continues to evolve, potentially affecting food security and livelihoods for millions of people worldwide.`,
    questions: [
      {
        question: "What percentage of excess atmospheric CO2 is absorbed by the oceans?",
        options: ["20%", "25%", "30%", "35%"],
        correct: 2
      },
      {
        question: "By how much has ocean pH decreased since the Industrial Revolution?",
        options: ["0.05 units", "0.1 units", "0.2 units", "0.3 units"],
        correct: 1
      },
      {
        question: "What percentage of marine species do coral reefs support?",
        options: ["15%", "20%", "25%", "30%"],
        correct: 2
      },
      {
        question: "What creates a 'synergistic stress' for coral reefs?",
        options: ["Rising sea temperatures and decreasing pH", "Pollution and overfishing", "Ocean currents and salinity changes", "Storms and sea level rise"],
        correct: 0
      },
      {
        question: "What happens to calcium carbonate structures in severely acidified conditions?",
        options: ["They become stronger", "They remain unchanged", "They may begin to dissolve", "They change color"],
        correct: 2
      }
    ]
  },
  {
    id: 10,
    title: "Behavioral Economics and Market Anomalies",
    difficulty: "Hard",
    level: "hard",
    estimatedWPM: 330,
    text: `Behavioral economics, an interdisciplinary field that integrates psychological insights into economic analysis, has fundamentally challenged the traditional assumptions of rational choice theory and efficient market hypotheses. This paradigm shift has revealed numerous market anomalies that cannot be adequately explained by conventional economic models, suggesting that human psychology plays a crucial role in financial decision-making and market dynamics.

The efficient market hypothesis (EMH), formulated by Eugene Fama, posits that asset prices fully reflect all available information, making it impossible to consistently achieve returns exceeding market averages through stock selection or market timing. However, behavioral economists have documented numerous violations of market efficiency, including momentum effects, where securities that have performed well recently continue to outperform in the short term, and reversal effects, where poorly performing securities subsequently outperform.

Prospect theory, developed by Daniel Kahneman and Amos Tversky, provides a descriptive framework for understanding how individuals make decisions under risk and uncertainty. Unlike expected utility theory, which assumes rational risk assessment, prospect theory demonstrates that people evaluate potential losses and gains relative to a reference point, exhibit loss aversion, and show diminishing sensitivity to changes in wealth. These psychological biases lead to systematic deviations from rational choice predictions.

The disposition effect, one of the most robust findings in behavioral finance, describes investors' tendency to sell winning investments too early while holding losing investments too long. This behavior contradicts the rational strategy of tax-loss selling and can be attributed to mental accounting biases and the asymmetric treatment of gains and losses. Similarly, the endowment effect demonstrates that people value objects more highly when they own them than when they don't, leading to inefficient market transactions.

Overconfidence bias represents another significant factor in market anomalies. Investors systematically overestimate their ability to predict market movements and select superior investments, leading to excessive trading, insufficient diversification, and poor timing decisions. This overconfidence is often accompanied by confirmation bias, where investors selectively seek information that confirms their existing beliefs while dismissing contradictory evidence. These behavioral patterns contribute to market volatility and create opportunities for systematic arbitrage strategies, though such opportunities may persist due to limits to arbitrage and the risks associated with exploiting behavioral biases.`,
    questions: [
      {
        question: "What does the efficient market hypothesis suggest about asset prices?",
        options: ["They are always overvalued", "They fully reflect all available information", "They follow predictable patterns", "They are influenced by emotions"],
        correct: 1
      },
      {
        question: "Who developed prospect theory?",
        options: ["Eugene Fama", "Daniel Kahneman and Amos Tversky", "Adam Smith", "John Maynard Keynes"],
        correct: 1
      },
      {
        question: "What is the disposition effect?",
        options: ["Buying high and selling low", "Selling winners too early and holding losers too long", "Diversifying portfolios", "Following market trends"],
        correct: 1
      },
      {
        question: "What does overconfidence bias lead to in investing?",
        options: ["Better diversification", "Excessive trading and poor timing", "More conservative investments", "Better risk assessment"],
        correct: 1
      },
      {
        question: "According to the passage, what accompanies overconfidence bias?",
        options: ["Loss aversion", "Confirmation bias", "Disposition effect", "Endowment effect"],
        correct: 1
      }
    ]  },

  // Additional Easy Level Tests
  {
    id: 11,
    title: "The Art of Cooking",
    difficulty: "Easy",
    level: "easy",
    estimatedWPM: 185,
    text: `Cooking is more than just preparing food; it's an art form that brings people together. Throughout history, every culture has developed its own unique cooking traditions and techniques. These traditions have been passed down through generations, creating the diverse culinary landscape we enjoy today.

Basic cooking skills are essential for everyone. Learning to cook not only saves money but also ensures you eat healthier meals. When you cook at home, you control the ingredients and can avoid excessive salt, sugar, and unhealthy fats often found in processed foods. Fresh ingredients always taste better and provide more nutrition than pre-packaged alternatives.

Different cooking methods produce different flavors and textures. Grilling adds a smoky flavor, while steaming preserves nutrients and natural tastes. Baking allows for even heating, and stir-frying maintains the crispness of vegetables. Understanding these methods helps you choose the best technique for each ingredient.

Seasoning is crucial for good cooking. Salt enhances natural flavors, while herbs and spices add complexity and depth. Garlic, onions, and ginger form the foundation of many dishes around the world. Learning to balance these flavors takes practice, but it's worth the effort.

The kitchen is a place of creativity and experimentation. Don't be afraid to try new recipes or modify existing ones to suit your taste. Cooking should be enjoyable, not stressful. Start with simple recipes and gradually work your way up to more complex dishes as your confidence grows.`,
    questions: [
      {
        question: "What does cooking at home help you control?",
        options: ["Temperature", "Ingredients", "Time", "Equipment"],
        correct: 1
      },
      {
        question: "Which cooking method is mentioned as preserving nutrients?",
        options: ["Grilling", "Baking", "Steaming", "Stir-frying"],
        correct: 2
      },
      {
        question: "What should you start with as a beginner cook?",
        options: ["Complex dishes", "Simple recipes", "Expensive ingredients", "Professional equipment"],
        correct: 1
      }
    ]
  },

  {
    id: 12,
    title: "Digital Photography Basics",
    difficulty: "Easy",
    level: "easy",
    estimatedWPM: 195,
    text: `Digital photography has revolutionized how we capture and share memories. Unlike traditional film photography, digital cameras allow you to take unlimited photos without worrying about running out of film. You can immediately see your results on the camera's screen and delete photos you don't like.

Understanding basic camera settings will improve your photography significantly. The three most important settings are aperture, shutter speed, and ISO. Aperture controls how much light enters the camera and affects the depth of field. A wide aperture creates a blurred background, while a narrow aperture keeps everything in focus.

Shutter speed determines how long the camera sensor is exposed to light. Fast shutter speeds freeze motion, making them perfect for sports photography. Slow shutter speeds create motion blur, which can be artistic in the right situation. ISO controls the sensor's sensitivity to light, with higher ISO values useful in dark conditions but creating more noise.

Good composition makes photos more interesting and visually appealing. The rule of thirds suggests placing important elements along imaginary lines that divide the frame into nine equal parts. Leading lines guide the viewer's eye through the photo, while framing uses natural elements to create borders around your subject.

Practice is essential for improving your photography skills. Take photos regularly and experiment with different settings and compositions. Study photos you admire and try to understand what makes them effective. With time and practice, you'll develop your own unique photographic style.`,
    questions: [
      {
        question: "What are the three most important camera settings mentioned?",
        options: ["Focus, zoom, flash", "Aperture, shutter speed, ISO", "Color, contrast, brightness", "Manual, auto, scene"],
        correct: 1
      },
      {
        question: "What does a wide aperture create?",
        options: ["Sharp focus everywhere", "Blurred background", "Bright exposure", "Fast shutter"],
        correct: 1
      },
      {
        question: "What does the rule of thirds suggest?",
        options: ["Taking three photos", "Using three colors", "Placing elements along dividing lines", "Waiting three seconds"],
        correct: 2
      }
    ]
  },

  {
    id: 13,
    title: "The Benefits of Reading",
    difficulty: "Easy",
    level: "easy",
    estimatedWPM: 180,
    text: `Reading is one of the most rewarding activities you can pursue. It opens doors to new worlds, expands your knowledge, and improves your mental abilities. Whether you prefer fiction or non-fiction, books offer countless benefits that extend far beyond entertainment.

Regular reading improves vocabulary and language skills. When you encounter new words in context, you naturally learn their meanings and usage. This expanded vocabulary helps you communicate more effectively in both speaking and writing. Reading also exposes you to different writing styles and sentence structures, improving your own writing abilities.

Reading exercises your brain and keeps it active. Like physical exercise strengthens your body, mental exercise through reading strengthens your mind. Studies have shown that regular reading can help prevent cognitive decline and may reduce the risk of dementia in later life. It also improves concentration and focus, skills that are valuable in all areas of life.

Books provide stress relief and relaxation. Getting lost in a good story can help you forget about daily worries and problems. The quiet activity of reading also promotes better sleep when done before bedtime. Many people find that reading helps them unwind after a busy day.

Reading broadens your perspective and understanding of the world. Through books, you can experience different cultures, time periods, and ways of thinking. This exposure to diverse ideas and experiences makes you more empathetic and open-minded. It also provides topics for interesting conversations with others.`,
    questions: [
      {
        question: "How does reading help prevent cognitive decline?",
        options: ["By increasing sleep", "By exercising the brain", "By reducing stress", "By improving eyesight"],
        correct: 1
      },
      {
        question: "What skill does reading improve that's valuable in all areas of life?",
        options: ["Speed", "Concentration", "Memory", "Creativity"],
        correct: 1
      },
      {
        question: "How does reading make you more empathetic?",
        options: ["By reducing stress", "By improving vocabulary", "By exposing you to diverse experiences", "By exercising your brain"],
        correct: 2
      }
    ]
  },

  {
    id: 14,
    title: "Gardening for Beginners",
    difficulty: "Easy",
    level: "easy",
    estimatedWPM: 190,
    text: `Gardening is a rewarding hobby that connects you with nature and provides fresh food or beautiful flowers. Even if you have no experience, you can start a successful garden with some basic knowledge and patience. The key is to start small and learn as you go.

Choosing the right location is crucial for garden success. Most plants need at least six hours of direct sunlight daily, so observe your yard throughout the day to find the sunniest spots. Good drainage is also important because most plants don't like waterlogged soil. If water pools in an area after rain, choose a different spot or improve drainage.

Soil preparation is the foundation of a healthy garden. Good soil should be loose, dark, and rich in organic matter. You can improve poor soil by adding compost, which provides nutrients and improves soil structure. Most garden centers sell compost, or you can make your own from kitchen scraps and yard waste.

Start with easy-to-grow plants to build confidence. Tomatoes, lettuce, and herbs like basil are forgiving and grow quickly. For flowers, consider marigolds, zinnias, and sunflowers. These plants tolerate various conditions and don't require special care. As you gain experience, you can try more challenging plants.

Watering and maintenance are important for plant health. Water deeply but less frequently to encourage deep root growth. Early morning is the best time to water because plants can absorb moisture before the heat of the day. Regular weeding and watching for pests will keep your garden healthy and productive.`,
    questions: [
      {
        question: "How many hours of direct sunlight do most plants need daily?",
        options: ["At least 4 hours", "At least 6 hours", "At least 8 hours", "At least 10 hours"],
        correct: 1
      },
      {
        question: "What does compost provide to soil?",
        options: ["Water and drainage", "Nutrients and structure", "Sunlight and warmth", "Protection from pests"],
        correct: 1
      },
      {
        question: "When is the best time to water plants?",
        options: ["Late evening", "Midday", "Early morning", "Afternoon"],
        correct: 2
      }
    ]
  },

  {
    id: 15,
    title: "Time Management Skills",
    difficulty: "Easy",
    level: "easy",
    estimatedWPM: 185,
    text: `Good time management is essential for success in both personal and professional life. When you manage your time effectively, you can accomplish more while feeling less stressed. The key is to develop systems and habits that help you use your time wisely.

Planning is the first step in effective time management. Take a few minutes each evening to plan the next day's activities. Make a list of tasks you need to complete and estimate how long each will take. This helps you see if you're being realistic about what you can accomplish. Priority ranking helps you focus on the most important tasks first.

Setting goals gives direction to your time management efforts. Break large projects into smaller, manageable tasks. This makes big jobs less overwhelming and gives you a sense of progress as you complete each step. Deadlines create urgency and help you stay focused on completion.

Eliminating distractions is crucial for productivity. Social media, email, and phone notifications can constantly interrupt your work. Set specific times to check messages rather than responding immediately to every notification. Create a dedicated workspace where you can focus without interruptions.

Learn to say no to requests that don't align with your priorities. Taking on too many commitments leads to stress and poor performance. It's better to do fewer things well than to spread yourself too thin. Remember that saying no to one thing means saying yes to something more important.

Regular breaks actually improve productivity. Your brain needs time to rest and recharge. The Pomodoro Technique suggests working for 25 minutes, then taking a 5-minute break. This pattern helps maintain focus and prevents burnout throughout the day.`,
    questions: [
      {
        question: "What should you do each evening according to the passage?",
        options: ["Review the day's work", "Plan the next day", "Check social media", "Exercise"],
        correct: 1
      },
      {
        question: "What technique suggests working for 25 minutes then taking a break?",
        options: ["Time blocking", "Priority ranking", "Pomodoro Technique", "Task batching"],
        correct: 2
      },
      {
        question: "What does saying no to one thing mean?",
        options: ["Being rude", "Saying yes to something more important", "Avoiding responsibility", "Creating more work"],
        correct: 1
      }
    ]
  },

  // Additional Moderate Level Tests
  {
    id: 16,
    title: "The Science of Climate Change",
    difficulty: "Moderate",
    level: "moderate",
    estimatedWPM: 260,
    text: `Climate change represents one of the most significant challenges facing humanity in the 21st century. The scientific consensus is clear: human activities, particularly the burning of fossil fuels, are the primary drivers of current global warming trends. Understanding the mechanisms behind climate change is crucial for developing effective mitigation and adaptation strategies.

The greenhouse effect is the fundamental process underlying climate change. Solar radiation enters Earth's atmosphere and warms the planet's surface. The surface then emits infrared radiation back toward space. Greenhouse gases in the atmosphere, including carbon dioxide, methane, and water vapor, trap some of this outgoing radiation, preventing it from escaping to space. This natural greenhouse effect is essential for life on Earth, as it keeps our planet warm enough to support ecosystems.

However, human activities have significantly increased greenhouse gas concentrations in the atmosphere. Carbon dioxide levels have risen by over 40% since pre-industrial times, primarily due to fossil fuel combustion and deforestation. This enhanced greenhouse effect is causing global temperatures to rise at an unprecedented rate. The last decade has been the warmest on record, with multiple temperature records broken annually.

The consequences of climate change are already visible across the globe. Rising sea levels threaten coastal communities and small island nations. Extreme weather events, including hurricanes, droughts, and heatwaves, are becoming more frequent and intense. Arctic ice is melting at an accelerating pace, affecting global weather patterns and threatening polar bear habitats.

Climate change also poses significant risks to human health and food security. Changing precipitation patterns affect agricultural productivity, potentially leading to food shortages in vulnerable regions. Heat-related illnesses are increasing, and the geographic range of vector-borne diseases is expanding. These impacts disproportionately affect the world's poorest populations, who have the least capacity to adapt.

Addressing climate change requires both mitigation and adaptation strategies. Mitigation involves reducing greenhouse gas emissions through renewable energy deployment, energy efficiency improvements, and carbon capture technologies. Adaptation focuses on building resilience to climate impacts through infrastructure improvements, ecosystem restoration, and community preparedness programs.`,
    questions: [
      {
        question: "What is the primary driver of current global warming trends?",
        options: ["Solar radiation changes", "Natural climate cycles", "Human activities", "Volcanic eruptions"],
        correct: 2
      },
      {
        question: "By what percentage have carbon dioxide levels risen since pre-industrial times?",
        options: ["Over 30%", "Over 40%", "Over 50%", "Over 60%"],
        correct: 1
      },
      {
        question: "What does mitigation involve in addressing climate change?",
        options: ["Building resilience to impacts", "Reducing greenhouse gas emissions", "Studying climate patterns", "Monitoring temperature changes"],
        correct: 1
      },
      {
        question: "Who is disproportionately affected by climate change impacts?",
        options: ["Developed countries", "Coastal communities", "The world's poorest populations", "Arctic regions"],
        correct: 2
      }
    ]
  },

  {
    id: 17,
    title: "Artificial Intelligence in Healthcare",
    difficulty: "Moderate",
    level: "moderate",
    estimatedWPM: 270,
    text: `Artificial intelligence is revolutionizing healthcare by enhancing diagnostic accuracy, personalizing treatment plans, and improving patient outcomes. From medical imaging analysis to drug discovery, AI applications are transforming how healthcare professionals diagnose, treat, and prevent diseases. This technological advancement promises to address some of healthcare's most pressing challenges while raising important ethical and practical considerations.

Machine learning algorithms excel at pattern recognition, making them particularly valuable for medical imaging analysis. AI systems can identify subtle abnormalities in X-rays, MRIs, and CT scans that human radiologists might miss. In dermatology, AI can analyze skin lesions with accuracy comparable to experienced dermatologists, potentially enabling earlier detection of skin cancer. Ophthalmologists use AI to screen for diabetic retinopathy, a leading cause of blindness, in routine eye exams.

Natural language processing allows AI systems to extract valuable information from electronic health records, clinical notes, and medical literature. This capability enables more comprehensive patient risk assessment and can identify patients who might benefit from preventive interventions. AI can also assist in clinical decision-making by providing evidence-based treatment recommendations based on patient characteristics and the latest medical research.

Drug discovery represents another promising application of AI in healthcare. Traditional drug development is a lengthy and expensive process, often taking 10-15 years and costing billions of dollars. AI can accelerate this process by identifying potential drug compounds, predicting their efficacy, and optimizing clinical trial design. Machine learning models can analyze vast datasets to identify new therapeutic targets and repurpose existing drugs for new indications.

Personalized medicine is becoming increasingly feasible through AI analysis of genomic data, lifestyle factors, and environmental influences. AI algorithms can identify patient subgroups that respond differently to treatments, enabling more targeted and effective therapies. This precision medicine approach can reduce adverse drug reactions and improve treatment outcomes while potentially reducing healthcare costs.

However, the integration of AI in healthcare faces significant challenges. Data privacy and security concerns are paramount, as healthcare data is highly sensitive and strictly regulated. Ensuring AI systems are free from bias and provide equitable care across diverse populations is crucial. Additionally, healthcare professionals need training to effectively use AI tools, and regulatory frameworks must evolve to ensure patient safety while fostering innovation.`,
    questions: [
      {
        question: "What makes AI particularly valuable for medical imaging analysis?",
        options: ["Speed of processing", "Pattern recognition ability", "Cost effectiveness", "Data storage capacity"],
        correct: 1
      },
      {
        question: "How long does traditional drug development typically take?",
        options: ["5-10 years", "10-15 years", "15-20 years", "20-25 years"],
        correct: 1
      },
      {
        question: "What does personalized medicine enable through AI analysis?",
        options: ["Faster diagnosis", "More targeted therapies", "Reduced healthcare costs", "Better data privacy"],
        correct: 1
      },
      {
        question: "What is a major challenge in integrating AI in healthcare?",
        options: ["Lack of computing power", "Insufficient medical data", "Data privacy and security concerns", "Resistance from patients"],
        correct: 2
      }
    ]
  },

  {
    id: 18,
    title: "Urban Planning and Smart Cities",
    difficulty: "Moderate",
    level: "moderate",
    estimatedWPM: 255,
    text: `Urban planning has evolved significantly in response to rapid urbanization and technological advancement. As more than half of the world's population now lives in cities, with projections suggesting this figure will reach 68% by 2050, urban planners face unprecedented challenges in creating sustainable, livable, and efficient urban environments. The concept of smart cities has emerged as a promising approach to address these challenges through integrated technology solutions.

Smart cities leverage Internet of Things (IoT) devices, big data analytics, and artificial intelligence to optimize urban services and infrastructure. Traffic management systems use real-time data from sensors and cameras to adjust traffic light timing, reducing congestion and improving air quality. Smart parking solutions guide drivers to available spaces, minimizing time spent searching for parking and reducing emissions from unnecessary driving.

Energy management in smart cities focuses on efficiency and sustainability. Smart grids dynamically balance electricity supply and demand, incorporating renewable energy sources and energy storage systems. Buildings equipped with smart sensors automatically adjust lighting, heating, and cooling based on occupancy and weather conditions. These systems can reduce energy consumption by 20-30% while maintaining comfort levels.

Water management is another critical component of smart city infrastructure. Smart water systems monitor consumption patterns, detect leaks quickly, and optimize distribution networks. Advanced sensors can identify water quality issues in real-time, ensuring safe drinking water for residents. Storm water management systems use predictive analytics to prepare for extreme weather events and prevent flooding.

However, the implementation of smart city technologies raises important considerations about privacy, equity, and governance. The collection and use of vast amounts of citizen data must be carefully managed to protect privacy rights while enabling beneficial services. Digital divide issues must be addressed to ensure that smart city benefits are accessible to all residents, regardless of their technological literacy or economic status.

Successful smart city development requires collaboration between government, private sector, and citizens. Public-private partnerships can provide the necessary funding and expertise, while citizen engagement ensures that technology solutions address real community needs. Urban planners must balance technological innovation with human-centered design principles to create cities that are not only smart but also inclusive and sustainable.`,
    questions: [
      {
        question: "What percentage of the world's population is projected to live in cities by 2050?",
        options: ["58%", "68%", "78%", "88%"],
        correct: 1
      },
      {
        question: "How much can smart building systems reduce energy consumption?",
        options: ["10-20%", "20-30%", "30-40%", "40-50%"],
        correct: 1
      },
      {
        question: "What must be carefully managed in smart cities to protect privacy rights?",
        options: ["Energy consumption", "Traffic flow", "Collection and use of citizen data", "Water distribution"],
        correct: 2
      },
      {
        question: "What is necessary for successful smart city development?",
        options: ["Government control", "Private sector leadership", "Collaboration between stakeholders", "Citizen resistance"],
        correct: 2
      }
    ]
  },

  // Additional Hard Level Tests
  {
    id: 19,
    title: "Quantum Computing and Cryptography",
    difficulty: "Hard",
    level: "hard",
    estimatedWPM: 340,
    text: `Quantum computing represents a paradigm shift in computational capability that threatens to revolutionize both technological advancement and cybersecurity frameworks. Unlike classical computers that process information using binary bits in definite states of 0 or 1, quantum computers exploit quantum mechanical phenomena such as superposition and entanglement to perform calculations using quantum bits, or qubits, which can exist in multiple states simultaneously.

The principle of superposition allows qubits to be in a coherent combination of both 0 and 1 states until measured, enabling quantum computers to process vast numbers of possibilities concurrently. Entanglement, another quantum phenomenon, creates correlations between qubits such that the state of one qubit instantly affects another, regardless of physical distance. These properties enable quantum computers to solve certain classes of problems exponentially faster than classical computers.

Shor's algorithm, developed by mathematician Peter Shor in 1994, demonstrates quantum computing's potential to factor large integers efficiently. This capability poses a significant threat to current cryptographic systems, particularly RSA encryption, which relies on the mathematical difficulty of factoring large composite numbers. While classical computers would require astronomical amounts of time to break modern encryption keys, a sufficiently large quantum computer could potentially decrypt these systems in polynomial time.

The implications for cybersecurity are profound. Current public-key cryptography, which secures everything from online banking to government communications, could become obsolete once large-scale quantum computers are developed. This has prompted the development of post-quantum cryptography, which involves creating cryptographic algorithms that remain secure against both classical and quantum attacks.

NIST (National Institute of Standards and Technology) has been conducting a multi-year process to standardize post-quantum cryptographic algorithms. These new algorithms rely on mathematical problems that are believed to be difficult for both classical and quantum computers to solve, such as lattice-based cryptography, code-based cryptography, and multivariate cryptography. The transition to post-quantum cryptography represents one of the most significant infrastructure upgrades in the history of information security.

However, quantum computing also offers opportunities for enhanced security through quantum key distribution (QKD) and quantum cryptography. QKD uses the principles of quantum mechanics to detect eavesdropping attempts, as any observation of quantum states necessarily disturbs them. This provides theoretically unbreakable communication channels, though practical implementations face significant technical challenges.

The timeline for quantum computing's impact on cryptography remains uncertain. While significant progress has been made in quantum hardware development, building quantum computers with sufficient coherence and error correction to break current encryption remains a formidable challenge. Quantum decoherence, the loss of quantum properties due to environmental interference, currently limits the practical applications of quantum computers.`,
    questions: [
      {
        question: "What enables quantum computers to process vast numbers of possibilities concurrently?",
        options: ["Entanglement", "Superposition", "Decoherence", "Quantum tunneling"],
        correct: 1
      },
      {
        question: "What does Shor's algorithm demonstrate about quantum computing?",
        options: ["It can create unbreakable encryption", "It can factor large integers efficiently", "It can solve all mathematical problems", "It can prevent quantum decoherence"],
        correct: 1
      },
      {
        question: "What is the main challenge currently limiting quantum computers?",
        options: ["High cost", "Quantum decoherence", "Lack of algorithms", "Limited processing power"],
        correct: 1
      },
      {
        question: "What does quantum key distribution (QKD) use to detect eavesdropping?",
        options: ["Mathematical complexity", "Quantum mechanics principles", "Classical encryption", "Network monitoring"],
        correct: 1
      },
      {
        question: "Which organization is standardizing post-quantum cryptographic algorithms?",
        options: ["NSA", "NIST", "IEEE", "ISO"],
        correct: 1
      }
    ]
  },

  {
    id: 20,
    title: "Neuroscience and Consciousness",
    difficulty: "Hard",
    level: "hard",
    estimatedWPM: 350,
    text: `The study of consciousness represents one of the most profound and challenging frontiers in neuroscience, psychology, and philosophy. Despite centuries of philosophical inquiry and decades of empirical research, the nature of consciousness—the subjective, first-person experience of being aware—remains one of the greatest unsolved mysteries in science. This "hard problem" of consciousness, as philosopher David Chalmers termed it, concerns not just the neural correlates of consciousness but the fundamental question of how subjective experience arises from objective neural processes.

Contemporary neuroscientific approaches to consciousness have yielded several competing theories. Integrated Information Theory (IIT), proposed by Giulio Tononi, suggests that consciousness corresponds to integrated information in a system. According to IIT, consciousness is a measure of how much information is generated by a system above and beyond its parts, with higher levels of integration corresponding to richer conscious experiences. This theory provides a mathematical framework for quantifying consciousness and has implications for understanding various states of awareness.

Global Workspace Theory (GWT), developed by Bernard Baars and later refined by Stanislas Dehaene, proposes that consciousness arises when information becomes globally accessible across different brain regions. This theory suggests that consciousness functions as a global workspace where different specialized brain modules can share information, enabling flexible and coherent behavior. Neuroimaging studies have identified networks of brain regions that become active during conscious processing, supporting the global workspace hypothesis.

The neural correlates of consciousness (NCCs) represent the minimal neural mechanisms sufficient for specific conscious experiences. Research using techniques such as functional magnetic resonance imaging (fMRI), electroencephalography (EEG), and intracranial recordings has identified various brain regions and networks associated with conscious experience. The thalamo-cortical system, particularly the connections between the thalamus and cortical regions, appears crucial for maintaining consciousness, as evidenced by the loss of consciousness following certain thalamic lesions.

Altered states of consciousness provide valuable insights into the nature of normal awareness. Studies of anesthesia, sleep, meditation, and psychedelic experiences reveal how consciousness can be modulated and transformed. Recent research with psychedelic compounds such as psilocybin and LSD has shown that these substances can dramatically alter conscious experience while providing measurable changes in brain connectivity patterns. These studies suggest that consciousness may be more flexible and modifiable than previously thought.

The binding problem in consciousness refers to how the brain integrates disparate sensory inputs into unified conscious experiences. When we perceive a red apple, for example, the processing of color, shape, texture, and location occurs in different brain regions, yet we experience a single, coherent object. Various mechanisms have been proposed to explain this binding, including neural synchrony, attention-based binding, and temporal integration processes.

Philosophical questions about consciousness intersect with neuroscientific findings in complex ways. The question of whether consciousness is purely a product of neural activity or whether it represents a fundamental feature of reality remains contentious. Some researchers propose that consciousness may be an emergent property of complex information processing systems, while others argue for more radical positions such as panpsychism, which suggests that consciousness is a basic feature of all matter.`,
    questions: [
      {
        question: "What does the 'hard problem' of consciousness refer to?",
        options: ["Neural correlates of consciousness", "How subjective experience arises from neural processes", "Measurement of brain activity", "Classification of conscious states"],
        correct: 1
      },
      {
        question: "According to Integrated Information Theory, what does consciousness correspond to?",
        options: ["Global brain activity", "Integrated information in a system", "Neural synchrony", "Sensory processing"],
        correct: 1
      },
      {
        question: "What brain system appears crucial for maintaining consciousness?",
        options: ["Limbic system", "Thalamo-cortical system", "Brainstem", "Cerebellum"],
        correct: 1
      },
      {
        question: "What does the binding problem in consciousness refer to?",
        options: ["How memories are stored", "How the brain integrates disparate inputs into unified experiences", "How neurons connect to each other", "How consciousness develops"],
        correct: 1
      },
      {
        question: "What do recent psychedelic studies suggest about consciousness?",
        options: ["It's fixed and unchangeable", "It's more flexible and modifiable than previously thought", "It's purely a brain illusion", "It's independent of neural activity"],
        correct: 1
      }
    ]
  }
];

// Helper function to get texts by difficulty level
export const getTextsByDifficulty = (difficulty) => {
  return readingTestData.filter(text => text.level === difficulty);
};

// Helper function to get random text by difficulty
export const getRandomTextByDifficulty = (difficulty) => {
  const texts = getTextsByDifficulty(difficulty);
  return texts[Math.floor(Math.random() * texts.length)];
};

// Helper function to get all difficulty levels
export const getDifficultyLevels = () => {
  return ['easy', 'moderate', 'hard'];
};

// Helper function to get daily test (random selection)
export const getDailyTest = (difficulty) => {
  const texts = getTextsByDifficulty(difficulty);
  const dailyIndex = new Date().getDate() % texts.length;
  return texts[dailyIndex];
};

// Helper function to get test statistics
export const getTestStats = () => {
  const stats = {
    easy: getTextsByDifficulty('easy').length,
    moderate: getTextsByDifficulty('moderate').length,
    hard: getTextsByDifficulty('hard').length,
    total: readingTestData.length
  };
  return stats;
};
