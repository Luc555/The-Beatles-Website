//chk é o nosso checkbox
const chk = document.getElementById('chk');
const html = document.querySelector('html');

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

//Seta as variaveis de cores padrão que vão estar no html do css global
const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    markColor: getStyle(html, "--mark-color"),
}

//Mudança das variáveis acima, no mesmo local
const darkMode = {
    bg: "white",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "black",
    markColor: "red",
}

//Função de transformação de cor css
const transformKey = key => 
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()


//Função de transformações de cores, utilizando a função anterior e também uma chave
const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

//Fica atento à mudança de estado do checkbox
//Se estiver "marcado" muda para modo de cores Darkmode(está invertido por padrão), caso contrário
//seta as cores padrão
chk.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})


//Funções de armazenamento do armazenamento local
const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

  chk.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  chk.removeAttribute('checked')
  changeColors(initialColors);
} else {
  chk.setAttribute('checked', "")
  changeColors(darkMode);
}