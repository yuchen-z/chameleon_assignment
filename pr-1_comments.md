# PART 1 - PR comments
Hey, this is looking good but needs some cleanup and clarification see below for notes. Also happy to hop on Tuple and pair program if that's simpler. <br>

General Notes
1. ln1 Can you clarify the reasoning behind currentUser being saved to the window object? Can we pass it down as a prop instead?
2. ln11 & ln17 & ln23 We can combine these three blocks of code. Set active to the result of filtering profiles for profiles active within the last 24hrs and conditionally render it depending on the current active user. Can you also clarify the intention behind ln 17? Example refactor:
```
const oneDayAgo = new Date().getTime() - 24 * 60 * 60 * 1000;
const activeProfiles = profiles
  .filter((profile) => {
    return !profile.disabled && profile["last_seen_time"] > oneDayAgo;
  })
  .map((a) => {
    <div onClick={() => onLaunchProfile(a.name, a.email)} className={className}>
      {`${a.name} - ${a.email}`}
    </div>;
  });

const onlyActiveUserIsCurUser =
  active.length === 1 && active[0].id === currentUser.id;
const noActiveProfiles = "no active profiles";

return (
  <div className={className}>
    {onlyActiveUserIsCurUser 
    ? noActiveProfiles 
    : activeProfiles}
    </div>
);
```

3. ln22 Let's use semantic html and ARIA-attributes to for improved accessibility where we can. Can \<div> change to \<dialog>?
4. Add classnames and/or id to props for styling extensibility

Syntax and Formatting
1. ln6 remove '...'
2. ln8 refer to style guide for choosing between arrow function or function declaration
3. ln9 change var to const for block scoping
4. ln17 default to using strictly equals '==='
5. For improved component organization, keep one component within each file (already did this part, great!) and use default export to export the component.

# PART 2 - how would you do this differently
The main improvement would be on code maintainability by using semantic variable names and native JS array methods, refer to no.2 from general notes above. I would also consider displaying the commentor info within another component for increased control over display of commentor info and add a close button to the modal for accessibility.