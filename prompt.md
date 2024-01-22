Thanks for your interest in a Frontend engineering role at Chameleon. We're a solid and collaborative team that
  will always lend a helping hand. We prioritize asynchronousity in nearly all of our ways of working.

This exercise is meant to be a focused, high signal ~hour. Assume that if we've asked about it it's important to us. We will 
  evaluate your React skills, your general understanding of JavaScript, your creativity, organization, etc.

Prompt:
  
  0. How are you today? 😊 **Doing good, thank you for checking in. Really enjoying how thought-out this assignment is :)**
  1. Below are the parts of a basic selection menu, but there are issues and it's too specific for the single current use case. We all more or less agree it's not that great and needs some attention. It should be componentized/generalized so that other engineers on the team can use selection menus. We will evaluate your React
     skills, your general understanding of JavaScript, your creativity, organization and clarity on communication
  2. The following items (3,4,5) combined are intentionally sightly vague in the sense there’s often more than a single
     possible/correct solution — a natural aspect of software engineering. Please consider possible implementation paths
     you'd consider valid and pick the best one.
  3. Now, make improvements to the menu; in the end it should meet the prompt and be able to be used in at least a
     couple different use cases such as an Account picker, a searchable list of items, one step of a flow
     to configure Alerting, etc...
  4. For certain use cases we would want to sync the menu selection to the server. We have an abstraction for syncing called
     httpPatch. It can be used like this => httpPatch('user', { [`menu-state-${key}`]: {true,false} }). Where would this
     be included and how/where best to handle this (properties needing to be synced/loaded to the backend)?
  5. Assuming others will use/add to this component in the future, write a 2-3 sentence "release note"
     to post into the #engineering channel in Slack (or add to the Components wiki page).
     **Refer to release_notes.md**

PS: No need to worry about CSS, actually making it "run" etc...

Now put youself in PR review mode...

  1. Please provide a couple Pull Request comments/suggestions to the engineer who wrote the code
     in pr-1.js; assume you're codeowner for the project on GitHub.
  2. Based on what you know from 1., how would you do this differently if you were
     to make this component from scratch?
**Refer to pr-1_comments.md**

 