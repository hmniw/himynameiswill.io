---
title: "Right, so what is testing?"
date: "2020-07-08"
keywords: "theory"
---

So a heads-up, this is a bit longer and includes a whole bunch more about my own
 journey than I initially anticipated it to 😅 Please bear with me!

###Context and a bit of background

I think the first time I became aware of software testing, and actually considered it for
a job, was when I realised that [Traveller's Tales](https://ttgames.com/) had a
studio in my hometown of Wilmslow. At the time, I'd been studying Game Development
at Futureworks, and had been considering what I'd do at the end of my three years.
I didn't end up working at TT, but I think the idea of games testing is roughly
what I associated with software testing for a long time.
The notion of having large complex systems where you want to try and check every
variable in combination with one another.

Not much longer after finishing the course at [Futureworks](https://futureworks.ac.uk/study/), a friend of mine at
Apple left to become a UAT Tester, and I remember him talking prior to leaving 
about him studying for an exam he was taking that would hopefully help him land
a role.\
I didn't think much more on it for a long while, and a few years later I ended up
leaving the job I was in to travel round Australia. As I was thinking of coming
home, I realised I wanted a career change. I'd be working in retail, either in a
store or a head office capacity, since I was 16, and it felt like it was finally
time to branch out into something more technical.

I got in touch with my ex-Apple colleague, and asked him how he'd got into testing,
and a bit more about what he'd been studying before he got his role.\
Turns out he'd taken the [ISTQB Foundation in Software Testing](https://www.istqb.org/certification-path-root/foundation-level-2018.html), and so I quickly
set about trying to organise the same for myself, and mentally preparing myself for the
amount of money I was about to spend. I had to wait a month, but 
after that, I started the 3 day course, followed at the end by an exam. The course 
focused entirely on testing within the context of Waterfall (Featuring an inclusion
of V-Model as well!), and gave me a better and more contextual understanding of 
a lot of terms I'd seen floating around. I spent my evenings between lessons
reading over everything we'd cover that day to try and solidify my understanding.
I felt motivated and determined, and felt as energised as I did working on our
game during my final year at Futureworks.

The course helped enlighten me further, but I finished up with lots of ideas of
testing being about writing detailed test cases, for use in test plans, with test
objectives. There was a lot of terms that started with the word *test*, and to be
honest, though I tried to take it all in, the amount of terms beginning with *test*
and the lack of hands-on work using those terms in real life meant a lot of it was
difficult to remember. But feeling confident that I'd passed the exam, I began job
hunting (I was unemployed at the time), gleefully including the ISTQB course on my
CV.\
I applied for countless roles, most entry-level, but cheekily some regular-level ones
in the hopes I'd be able to use my knowledge to wing my way through whatever
challenges I might face. This was the first time in my life I'd basically not walked into a job
with minimal effort (I've been very fortunate so far), and it became disheartening 
when I unsurprisingly got no responses.

I asked a friend of mine who works as a software developer to take a look over my 
CV to see if he had any suggestions on what I could do to improve, and he suggested
I looked into Selenium, as test automation was where the biggest demands currently 
were.\
He kindly gave me a recommendation to try [Pluralsight](https://www.pluralsight.com/)
and suggested I had a look at some of the introductory courses on there. At this
point, I had almost no knowledge of test automation, and generally my tech skills
were limited. The most exposure I'd had to programming was C# during my game dev
course, and we'd not written a single unit test for our game then (Though I don't know
if unit testing in Unity was *as* big of a thing back then), and I'd had trouble
automating browser tasks using Powershell at my previous role, so Selenium was a
whole new world to me.\
I promptly spent the rest of my time following a Selenium in C# course on 
Pluralsight in between applying for software testing roles with an added note of
"Basic Selenium experience" tacked onto my CV.

By this point, if someone had asked me what testing was, I'd have probably told them
something along the lines of...

>*Software testing is what we do to ensure we have as close to defect-free software*
>*as we can, utilising a mixture of blackbox and whitebox techniques, and automation*
>*tools like Selenium.*

Which, to be fair to me at the time, probably wouldn't have been too bad an answer,
though I think I'd certainly call it a bit of an inexperienced answer.

Anyways, end of the story, I didn't get a software testing job! I was about two
months into being unemployed, was getting close to the limit on my credit card, and
*needed* a job ASAP. Fortunately, I got an amazing job at [AO.com](https://www.ao-jobs.com/)
that I *thoroughly* enjoyed looking after all their IT in their Manchester office,
with perks of an amazing team, amazing leadership, and with
a ton of flexibility and freedom to just get the job done how I saw fit.\
I stopped looking at other jobs during this time, and was content in my own little
world of writing Powershell scripts.
 
###A chance to have a career in testing
 
However, almost a year into the role, another ex-Apple colleague of mine, who worked
for a company I'd never heard of called ThoughtWorks, dropped me a message to see how
I'd been getting on and to ask if I'd ever heard back from their recruiters (He'd 
passed my details on when I was unemployed). He ended up mentioning that there
was an entry-level QA role going there that he thought I should apply for.\
I still dreamed of working in software development, and thought why not. So I had a
call with their recruitment, and long story short, though I felt **completely**
underqualified and out of my depth, I got the job 🎉
  
My first 6 weeks working for ThoughtWorks was spent in China at the grad-oriented
training programme called [ThoughtWorks University](https://www.thoughtworks.com/careers/graduates), or TWU for short, and it was
truly eye-opening, as well as being an all round exceptional experience. I went into
it with hopes of learning how ThoughtWorkers test things, and by extension, how
to actually do my job. My nerves about this role were at an all time high, as I
constantly felt like I was surrounded by exceptional humans who are all more
talented and better than I am, and who would all definitely realise that I had
no clue what I was doing which would no doubt lead to me failing my probation
(Sidenote: Thanks imposter syndrome 👍)

It turns out though, there are generally so few grad QAs going through TWU
compared to all other roles that there isn't a lot of QA specific content,
so a lot of what I learnt was about how to be a consultant, how ThoughtWorks 
develops software, and what being on a team is like. All exceptionally useful and 
super relevant, but I came out of it with even less of an idea of what a QA at
ThoughtWorks does than when I went in. But what did I learn? Well:

* I learned a whole lot more *about* automated tests, getting a better understanding
of unit, integration, and journey tests, what they actually mean, and when to use them.
* I came to understand that my job role doesn't have strict requirements or 
responsibilities for a reason. QAs in ThoughtWorks come in lots of different flavours,
ranging from super techy folk who are multi-skilled enough to function as devs if
it's required, to those who are far stronger at the more business side of things, and
everything in between and a mix-of.\
Which means I'm allowed to pursue whatever I find interesting really!
* I learned a lot about the theory of quality, how we might be able to measure
and communicate quality, both to stakeholders and in the team. And how the biggest
barrier to quality, the majority of the time, is miscommunication.
* And I learned a lot more about the role of a QA in an agile context. That we
should strive to lower the barriers that can form between disciplines so that we
can help deliver quality earlier in the software development lifecycle.

And obviously a whole bunch more, but I think that was the most important stuff.
To make up for the lack of QA focused content in TWU, on arriving back in the UK,
the capabilities folk in ThoughtWorks also organised a year long training course
with the [Ministry of Testing](https://www.ministryoftesting.com/).\
It's almost been a year since I started the once-a-month training course, and
it's taught me way more than I ever thought could've been involved with software
testing!

Topics we've covered so far have included:

* Testability
* What is testing?
* Technical testing
* Oracles
* Testing heuristics
* Exploratory testing
* Testing requirements
* And a whole ton more

So you'd think that if someone asked me what testing was now, that I'd have a 
pretty instantaneous, succinct response, right?

Errr... yeah, about that 😅 

###Alright, but seriously, what is testing?

Jokes aside, how would I actually explain what software testing is now?

Well, if you want something relatively to the point, I'd probably define it as:

>*Software testing is a set of tools used to help uncover information about a given product's*
>*current quality, to help guide and influence the resulting level of quality, and to help*
>*provide decision makers with the ability to make better informed decisions about the prouct*
>*based on that quality.*

But software testing is a lot of things. It's the conversations you have with your
team throughout the day, the various product and decision making meetings you're in
(Whether physically, or indirectly through attendees taking your opinions as their own),
or the emailed reports you send to your team leads about recent test success rates and
code coverage.\
It's pairing with your devs on stories, pairing with your BAs on stories, or pairing with
other team's QAs on stories that impact you both.\
But testing is also a lot of the stuff I learned throughout the years, like assessing
all the variables to check for edge cases, or thinking of test cases
that you'd want to use as acceptance criteria, and sometimes it might just be needing
to write a bunch of journey tests in your framework and language of choice.

I think if there's one thing that I've definitely learnt about software testing over
the last year though, it's that it's a lot more than I originally thought it was.
And there's no doubt that testing is even more than I've written here, and includes
plenty of other things that I've yet to learn.

Here's to another year of learning though 🍻


