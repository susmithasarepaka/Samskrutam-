async function mockLogin(payload) {
  const response = await fetch('data/users.json');
  const db = await response.json();

  let parent = db.parents.find(p => p.email === payload.email);

  if (!parent) {
    parent = {
      email: payload.email,
      children: []
    };
    db.parents.push(parent);
  }

  const level =
    payload.age <= 6 ? 'level-1' :
    payload.age <= 9 ? 'level-2' :
    'level-3';

  const child = {
    name: payload.childName,
    age: payload.age,
    level
  };

  parent.children.push(child);

  // Save session (simulating backend response)
  localStorage.setItem('sanskritUser', JSON.stringify({
    parentEmail: payload.email,
    childName: payload.childName,
    age: payload.age,
    level
  }));

  return { success: true, level };
}
