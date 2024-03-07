import Attraction from "./Attraction";
import { useState, useEffect } from 'react';

function AttractionsList(){
    const attractions = [
        {name: 'Dublin and Trinity Library',
        img: './images/IMG_1.jpg',
        info: 'Величні круті скелі, що височіють над Атлантичним океаном на заході Ірландії, пропонують захоплюючі краєвиди та неперевершені фотографійні можливості.',
        place: 'co. Louth'},

        {name: 'Cork',
        img: './images/IMG_2',
        info: 'Величні круті скелі, що височіють над Атлантичним океаном на заході Ірландії, пропонують захоплюючі краєвиди та неперевершені фотографійні можливості.',
        place: 'Chart'},

        {name: 'Galway',
        img: './images/IMG_2',
        info: 'У північній частині Ірландії розташований цей унікальний природний феномен, який складається з тисяч геометрично правильних камяних стовпів.',
        place: 'Chart'},

        {name: 'Killarney',
        img: './images/IMG_2',
        info: 'Цей прекрасний регіон розташований на заході Ірландії і славиться своїми гірськими пейзажами, озерами та болотами. Він є ідеальним місцем для прогулянок і досліджень природи.',
        place: 'Chart'},

        {name: 'Newgrange',
        img: './images/IMG_2',
        info: 'Це один з найстаріших мегалітних памяток у світі, старше навіть за єгипетські піраміди. Він є частиною багато тисяч років старої долини Бойн.',
        place: 'Chart'},

        {name: 'Giants Causeway',
        img: './images/IMG_2',
        info: 'Цей парк розташований на півдні Ірландії і відомий своїми прекрасними озерами, густими лісами та гірськими масивами. Він є найстарішим національним парком у країні.',
        place: 'Chart'},

    ]; 
return (
    <div className="attrContainer">
        {attractions.map((attraction, key) => <Attraction key={key} name={attraction.name} info={attraction.info} place ={attraction.place}/>)
}
    </div>
);  
}

export default AttractionsList;