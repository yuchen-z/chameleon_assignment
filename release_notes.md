Hi all! <br>
We've made some pretty significant changes to the \<Dropdown> component to make it more generalized and extensible. The \<Dropdown> component has two subcomponent categories organized as \<Select>  for the dropdown trigger and \<List> for displaying list \<Item>. You can plug and play with existing components or extend them as needed, such as the account picker I made with \<SelectAccount> and \<ListAccounts>, see below for example usage.

```
   <Dropdown>
      <Dropdown.Select label={'select items'}/>
      <Dropdown.List>
         {itemsArr}
      </Dropdown.List>
   </Dropdown>

   <Dropdown>
      <Dropdown.SelectAccount curUserId={curUserId}/>
      <Dropdown.ListAccounts/>
   </Dropdown>
```
Please note the current design uses useContext to simplify passing props while allowing further nesting and extensibility. This will have  impact on rendering perforance if your list contents are updated frequently.