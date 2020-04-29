---
title: Web Accessibility and W3C Standards
tags:
- web
- accessibility
- w3c
---

# Web Accessibility and W3C Standards

<TagLinks />


Web is for everyone and an essential part of life, at work, at home and on the road

Web Accessibility
: people withdifferent abilitites can use the web equally
* people using mouth stick to type
* Someone who cannot hear and uses captions to watch video
* Who cannot see well and uses scsreen reader to read the screen

## How to build accessibility into the code

HTML under the hood provide support for many accessibility features

* Text alternatives for images
  * Read aloud by screen readers
  * also used by search engines
* Labels, heading support acccessibility
* Web Contenet Accessibility Guidelines WCAG
  * ISO 40500
  * EN 301 549
* User Agent acccessibility Guidelines

15-20% of the populattion has diabilities

## How to conduct web accessibility test for a website

* Navigate website using the tab key
  * skip links
  * Follow examples from sites like
    * https://github.com/
* [Offscreen content](https://www.youtube.com/watch?v=cOmehxAU_4s)
* Familarize with screen readers
* When content is dynamically added to page, where the focus is directed

## Accessibility Fundamentals

Provide People with disabilities, Alternative ways to access content

### Why is it important

* Education
* Government
* Mandated by law in USA, UK, Isreal
* How it is going to operates with screenreader, keyboard?
* How it will look on a sunny day?
* Screen Reader Accesss
  * Add Affordance styles
  * Cant rely on CSS anymore
* How chrome actually talks to screen reader?

DOM
: collection of javascrip objects

* HTML tree is different from Acccessibility Tree
  * condensed than Fill HTML DOM tree
* How to access accessibility tree?
  * from chrome dev tools Accessibility,
  * What chrome is actually handing over to assistive technology
* Write Symantics HTML, why is it important?
  * because it gets announced by the screen reader
  * Typically start navigation starting from header
  * H1 to H6 are very important
  * Dont skip levels
  * Use them in sequiential order
  * Style them to be different sizes if you want them to different sizes
* Built in elements have rich symentics
* Generic elements have generic symentics
  * generic div - grouping element
  * Messup symentics like using div to look like a button
  * Use the right element for the job
* What if you dont have a existing symentic element?
  * tabs element, carasoul element, expandable tree widget?
  * WAI-ARIA
    * Web Accessibility Initiative - Accessible Rich Internet Appplications
* ARIA just changes symentics, do not add new cool behaviour
  * Lets you fill in the missing gaps in accessibility tree
  * Its still a lot of work
  * Stick to standard symentics

How to learn ARIA?

* classical blue on white text thigns
* you wander into sometime from google search and you are like didnt mean to be there and leave immediately
* role="cheeckbox"
* Labels helps user understand the purpose of a control
  * image alternaitive text
  * HTML label tag to wrap up input elements
* much of ARIA works with `id`s

a11y
: stands for accessibility
* because its hard to spell



@flowstart
html=>start: Plain HTML </>
dom=>condition: Parses to DOM by browser
css=>subroutine: Combined with CSS
aria=>subroutine: ARIA steps in
at=>operation: construct Accessibility Tree
gui=>end: GUI Screen
acc=>end: Accessibity Tree for Navigation

html->dom
dom(yes)->css->gui
dom(no)->at->aria->acc
@flowend

[Countries that have adopted WCAG standard](https://www.3playmedia.com/2017/08/22/countries-that-have-adopted-wcag-standards-map/)
[Learn Accessibility, webAIM](https://webaim.org/)

## Resources

* https://www.w3.org/WAI/
* https://youtu.be/z8xUCzToff8

<SimpleNewsletter/>
<Disqus />
