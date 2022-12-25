export const getRenderContacts = (contactsFromState, filterState) => {
  const normalizeFilterState = filterState.toLowerCase();
  const contactsToRender = contactsFromState.filter(contactItem =>
    contactItem.name.toLowerCase().includes(normalizeFilterState)
  );

  return contactsToRender;
};
