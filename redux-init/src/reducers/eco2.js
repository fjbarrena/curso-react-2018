import { handleActions } from 'redux-actions';
import { giveMeEcoMessage } from '../actions/eco';

const initialState = { selectedMessage: '' };

export default handleActions({
  [giveMeEcoMessage]: (state, action) => ({
    selectedMessage: eco_nsejos[Math.floor((Math.random()*100)%12)]
  })
}, initialState);

const eco_nsejos = [
  'Actúa. Cada una de tus acciones impacta negativa o positivamente nuestros ecosistemas. No creas que tirar una basura no importa porque sólo es una... no creas que levantar una basura no sirve porque sólo es una. Todo cuenta, así que cada cosa que hagas que sea en favor del planeta',
  'Exige a los tomadores de decisiones, a tus gobiernos (municipales, locales o federal) políticas públicas en beneficio del medio ambiente',
  'La quema de combustibles fósiles ocasiona más cambio climático, por ello para  evitar el calentamiento global disminuye tu consumo de petróleo',
  'Usa bicicleta, transporte público o comparte el auto cuando lo utilices',
  'Elige productos que no estén envasados en plástico y recicla o reutiliza los envases',
  'Compra frutas y verduras orgánicas (los fertilizantes y pesticidas suelen ser derivados del petróleo)',
  'Compra productos de belleza (shampoo, jabón o maquillaje) elaborados con ingredientes naturales, no derivados del petróleo',
  'Elige productos elaborados localmente. De esta manera se reduce el consumo de combustibles  empleados para su transporte',
  'Si puedes elegir, escoge la ropa hecha de algodón orgánico y no de materiales derivados del petróleo',
  'No uses artículos desechables',
  'Viaja menos en avión, aunque eso nos quite business ;)',
  'Demanda el uso de las energías renovables en lugar de los combustibles fósiles',
  'Cambia tu calentador por uno solar',
  'Producir y distribuir la energía genera gran cantidad de gases de efecto invernadero, por eso, para cuidar el planeta ¡ahorra energía!',
  'Aprovecha la energía solar. No sólo como luz natural, también como fuente para recargar tus aparatos, hay cargadores solares para muchas cosas como celulares, relojes, calculadoras, etc',
  'No desperdicies energía. Apaga las luces que no utilices y desconecta los aparatos eléctricos',
  'Cambia definitivamente los focos de bombilla por focos ahorradores',
  'Usa ollas de presión, pues gasta poca energía. Utiliza sartenes y ollas con fondo plano y con un diámetro superior al de la superficie de la parrilla, así la cocción será más rápida y ahorrarás energía',
  'No precalientes el horno. Es innecesario. Además, apágalo 15 minutos antes, el calor que queda en el horno terminará la cocción',
  'El consumismo impacta seriamente el ambiente:  implica una mayor extracción de materias primas (recursos naturales) y genera más tóxicos y basura',
  'Se un consumidor responsable. Consume sólo lo que necesitas y agota la vida útil de los productos, en otras palabras: reduce, reutiliza y recicla',
  'Se un consumidor responsable de agua. No desperdicies este cada vez más escaso recurso y al mismo tiempo estarás ahorrando energía porque hacerla llegar a tu casa, tratarla y desecharla implica un gasto energético',
  'Cambia el centro comercial por el mercado. Estarás comprando productos más frescos y seguros, además de apoyar a productores locales',
  'Lee las etiquetas de los productos que compras. No compres productos cuyos ingredientes no entiendas',
  'Prefiere los productos orgánicos y de comercio justo. Los productos orgánicos respetan el ambiente en su proceso de elaboración y son más sanos y seguros que los procesados de manera industrial',
  'La basura que no recibe un manejo adecuado es fuente de contaminación de suelos, agua y aire. Por otra parte el manejo y tratamiento de los residuos requiere mucha energía. Por todo esto, es muy importante reducir la cantidad de basura que generamos',
  'Evita los productos con muchos empaques o envolturas que acabarás tirando',
  'Lleva contigo una bolsa de tela para que no utilices bolsas de plástico cuando hagas compras',
  'Separa tus residuos al menos en orgánicos e inorgánicos y si es posible en reciclables (papel, aluminio, vidrio, cartón, tetrapack, etc)',
  'Convierte tu basura orgánica en compost. Si no sabes qué hacer con él, dáselo a un agricultor local, o abona un bosque cercano ;)',
  'Limpia con jabón puro que se biodegrada de manera segura y no es tóxico. Asegúrate de que sea sin esencias, colores sintéticos u otros aditivos',
  'En lugar de disolventes tóxicos utiliza vinagre (5% ácido acético).  Es un desinfectante suave, corta la grasa, limpia el vidrio, desodoriza y remueve los depósitos de calcio, manchas y acumulación de cera',
  'Olvídate de los plaguicidas industriales. Los plaguicidas naturales son más baratos, seguros y específicos',
  'El PVC genera algunos de los químicos más tóxicos que existen: las dioxinas y los furanos. Por eso el uso de este material en los juguetes de los niños ha sido prohibido en muchos países. El PVC de la ropa y los juguetes sexuales también debe prohibirse, pues este componente está hecho con cloro y otras sustancias consideradas probables cancerígenos, además de que es un derivado del petróleo. Opta por accesorios de sustancias naturales como caucho o látex',
  'Cuida nuestros bosques. Apoya el ecoturismo en zonas boscosas y en general el manejo forestal sustentable; no maltrates los árboles y no provoques incendios'
];