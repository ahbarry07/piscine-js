
const  getArchitects = () => [document.querySelectorAll('body a'), document.querySelectorAll('body span')]

const getClassical = () => [document.querySelectorAll('a.classical'), document.querySelectorAll('a:not(.classical)')]

const getActive = () => [document.querySelectorAll('a.classical.active'), document.querySelectorAll('a.classical:not(.active)')]

const getBonannoPisano = () => [document.getElementById('BonannoPisano'), document.querySelectorAll('a.classical.active')]


export {getArchitects, getClassical, getActive, getBonannoPisano}