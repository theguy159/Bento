// setup actions
const keybind_actions = [];

const assign_keybind_actions = (arr) => {
  arr.forEach((entry) => {
    keybind_actions.push({
      key: entry.keybind,
      url: entry.link,
    });
  });
};

assign_keybind_actions(CONFIG.firstButtonsContainer);
assign_keybind_actions(CONFIG.secondButtonsContainer);

CONFIG.firstlistsContainer.forEach((list) => {
  assign_keybind_actions(list.links);
});

CONFIG.secondListsContainer.forEach((list) => {
  assign_keybind_actions(list.links);
});

const keyDownListener = (e) => {
  const action = keybind_actions.find((a) => a.key === e.key);
  if (action) {
    window.open(action.url, CONFIG.openInNewTab ? "_blank" : "_self");
  }
};

document.addEventListener("keydown", keyDownListener);
