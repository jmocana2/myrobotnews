*Psst — ¿Quieres ver el diseño? Aquí lo tienes --> [jmocana/design](https://github.com/sveltejs/template)*

---

# Componente SearchAppBar

Contiene el menú principal y el buscador

## Uso
```js
<SearchAppBar />
```
## Ubicación en disco
El código fuente del componente vive en *`src/components/core/SearchAppBar`*.

## Componentes consumidos

*MATERIAL UI* [ver documentación](https://material-ui.com/components/box/)
```js
/** Material-UI */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
```

*COMPONENTES EXTENDIDOS POR STYLED COMPONENTS*
```js
import InputBase from '@material-ui/core/InputBase';
```