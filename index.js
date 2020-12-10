const express =require ("express");
const bodyParser =require("body-parser");


const app = express();

const abt = "The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract,[N 2] a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth. Nick Fury, director of the espionage agency S.H.I.E.L.D., and his lieutenant Agent Maria Hill arrive at a remote research facility during an evacuation, where physicist Dr. Erik Selvig is leading a research team experimenting on the Tesseract. Agent Phil Coulson explains that the object has begun radiating an unusual form of energy. The Tesseract suddenly activates and opens a wormhole, allowing Loki to reach Earth. Loki takes the Tesseract and uses his scepter to enslave Selvig and a few other agents, including Clint Barton, to aid him in his getaway.In response to the attack, Fury reactivates the 'Avengers Initiative'. Agent Natasha Romanoff is sent to Kolkata to recruit Dr. Bruce Banner to trace the Tesseract through its gamma radiation emissions. Coulson visits Tony Stark to have him check Selvig's research, and Fury approaches Steve Rogers with an assignment to retrieve the Tesseract.In Stuttgart, Barton steals iridium needed to stabilize the Tesseract's power while Loki causes a distraction, leading to a brief confrontation with Rogers, Stark, and Romanoff that ends with Loki's surrender. While Loki is being escorted to S.H.I.E.L.D., Thor, his adoptive brother, arrives and frees him, hoping to convince him to abandon his plan and return to Asgard. After a confrontation with Stark and Rogers, Thor agrees to take Loki to S.H.I.E.L.D.'s flying aircraft carrier, the Helicarrier. Upon arrival, Loki is imprisoned while Banner and Stark attempt to find the Tesseract."
const contact =  "Robert Downey Jr. as Tony Stark / Iron Man: A self-described genius, billionaire, playboy, and philanthropist with an electromechanical suit of armor of his own invention. Downey was cast as part of his four-picture deal with Marvel Studios, which included Iron Man 2 (2010) and The Avengers.[11] He said he initially pushed Whedon to make Stark the lead: 'Well, I said, 'I need to be in the opening sequence. I don't know what you're thinking, but Tony needs to drive this thing.' He was like, 'Okay, let's try that.' We tried it and it didn't work, because this is a different sort of thing, the story and the idea and the theme is the theme, and everybody is just an arm of the octopus'.About the character's evolution from previous films, Downey said, 'In Iron Man, which was an origin story, he was his own epiphany and redemption of sorts. Iron Man 2 is all about not being an island, dealing with legacy issues and making space for others. . . In The Avengers, he's throwing it down with the others' Downey earned $50 million from the film, 'once box-office bonuses and backend compensation [were] factored in .Chris Evans as Steve Rogers / Captain America: A World War II veteran who was enhanced to the peak of human physicality by an experimental serum and frozen in suspended animation before waking up in the modern world. Evans was cast as part of a deal to star in three Marvel films, in addition to The Avengers.[15] Evans said that Steve Rogers is much darker in The Avengers: 'It's just about him trying to come to terms with the modern world. You've got to imagine, it's enough of a shock to accept the fact that you're in a completely different time, but everybody you know is dead. Everybody you cared about. . . He was a soldier, obviously, everybody he went to battle with, all of his brothers in arms, they're all dead. He's just lonely. I think in the beginning it's a fish-out-of-water scene, and it's tough. It's a tough pill for him to swallow. Then comes trying to find a balance with the modern world.[16] Evans earned $2–3 million for the film.[14] Mark Ruffalo as Bruce Banner / Hulk: A genius scientist who, because of exposure to gamma radiation, transforms into a monster when enraged or agitated. Ruffalo, who was considered to play Banner in The Incredible Hulk (2008) before Edward Norton took the role,[17] was cast after negotiations between Marvel and Norton broke down.[18] About replacing Norton, Ruffalo said, I'm a friend of Ed's, and yeah, that wasn't a great way for all that to go down. But the way I see it is that Ed has bequeathed this part to me. I look at it as my generations Hamlet. About the character, he said, He a guy struggling with two sides of himself—the dark and the light—and everything he does in his life is filtered through issues of control. I grew up on the Bill Bixby TV series, which I thought was a really nuanced and real human way to look at the Hulk. I like that the part has those qualities.Chris Hemsworth as Thor:The crown prince of Asgard, based on the Norse mythological deity of the same name. Hemsworth was cast as part of a multiple movie deal.[25] He had previously worked with Joss Whedon on The Cabin in the Woods (2011).[26] Hemsworth said that he was able to maintain the strength he built up for Thor (2011) by increasing his food intake, consisting of chicken breasts, fish, steak, and eggs every day. When asked exactly how much, Hemsworth said, My body weight in protein pretty much! He remarked that Thor's motivation is much more of a personal one, in the sense that it's his brother that is stirring things up. Whereas everyone else, it's some bad guy who they've gotta take down. It's a different approach for me, or for Thor. He's constantly having to battle the greater good and what he should do vs. it's his little brother there. . . I've been frustrated with my brothers at times, or family, but I'm the only one who is allowed to be angry at them. There's a bit of that."
const home= "The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[N 1] it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, and Thor to form a team capable of stopping Thor's brother Loki from subjugating Earth."


app.set("view engine",'ejs');


app.use(bodyParser.urlencoded({extended:true}));




let posts=[];


app.get("/",(req,res)=>{
    res.render('list',
    { Name:"Home" ,
    Hello:home,
    posts:posts
});
})

app.get("/about",(req,res)=>{
    res.render('about',{Name:"About", New:abt})
})
app.get("/contact",(req,res)=>{
    res.render("contact",{Name:"Contacts",New:contact});
})
app.get("/compose",(req,res)=>{
    res.render("compose");
})

app.post("/compose",(req,res)=>{
    const post = {
        title: req.body.titleOne,
        content : req.body.contentOne
    } 
    posts.push(post);
    res.redirect("/")
   
})



app.use(express.static('public'));
app.listen(3000,()=>{
    console.log("port connected to 3000");
})