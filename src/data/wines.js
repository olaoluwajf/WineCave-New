import {px} from '@/data/media'
// Real labels. Prices are estimated Enugu retail in naira: confirm against your stock and cost.
// Characteristics are indicative 1 to 5 ratings: adjust to your own tasting notes.
export const wines=[
{id:1,img:px(3934057),name:"Jacob's Creek Shiraz Cabernet",type:'Red',region:'South Eastern Australia',grape:'Shiraz, Cabernet Sauvignon',price:14000,chars:[3,3,3,3,3],story:'A Shiraz and Cabernet Sauvignon blend from South Eastern Australia, made for easy, everyday drinking.'},
{id:2,img:px(9170979),name:'Casillero del Diablo Cabernet Sauvignon',type:'Red',region:'Central Valley, Chile',grape:'Cabernet Sauvignon',price:18000,chars:[3,4,3,3,3],story:"A varietal Cabernet Sauvignon from Chile's Central Valley, a dependable red for the table."},
{id:3,img:px(11596884),name:'Mouton Cadet Rouge',type:'Red',region:'Bordeaux, France',grape:'Merlot, Cabernet Sauvignon, Cabernet Franc',price:30000,chars:[3,3,3,3,3],story:'A classic Bordeaux blend, led by Merlot, in a softer and rounder style.'},
{id:4,img:px(9941173),name:'Penfolds Bin 389',type:'Red',region:'South Australia',grape:'Cabernet Sauvignon, Shiraz',price:185000,pick:true,chars:[5,5,4,4,4],story:'A South Australian Cabernet Shiraz long nicknamed the baby Grange, structured to reward patience.'},
{id:5,img:px(3934056),name:'Kim Crawford Sauvignon Blanc',type:'White',region:'Marlborough, New Zealand',grape:'Sauvignon Blanc',price:34000,chars:[4,2,1,5,3],story:'A crisp, aromatic Marlborough Sauvignon Blanc, best served well chilled.'},
{id:6,img:px(18878096),name:'Mateus Rosé',type:'Rosé',region:'Portugal',grape:'Portuguese red grapes',price:16000,chars:[2,2,1,3,2],story:'A light, fruity Portuguese rosé, easy to share.'},
{id:7,img:px(6662509),name:'Moët & Chandon Impérial Brut',type:'Sparkling',region:'Champagne, France',grape:'Pinot Noir, Pinot Meunier, Chardonnay',price:95000,chars:[3,3,1,4,3],story:'The signature non-vintage Champagne of the house, a blend of Pinot Noir, Pinot Meunier and Chardonnay.'},
{id:8,img:px(11943565),name:'Veuve Clicquot Yellow Label',type:'Sparkling',region:'Champagne, France',grape:'Pinot Noir, Pinot Meunier, Chardonnay',price:115000,pick:true,chars:[4,4,1,4,3],story:'A Pinot Noir-led non-vintage Champagne, the flagship of the house.'}]
export const rating=['Flavor intensity','Body','Tannin','Acidity','Alcohol']
export const types=['All','Red','White','Rosé','Sparkling']
