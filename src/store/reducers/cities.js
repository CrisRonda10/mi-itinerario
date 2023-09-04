import { createReducer } from "@reduxjs/toolkit";
import city_actions from "../actions/cities";

const {read_carousel,read_cities,read_city} =  city_actions

const initial_state = {
    carousel: [],
    cities: [],
    city: {}
}

const city_reducer = createReducer(
    initial_state,  //estado inicial
    builder => builder.addCase(    //callback constructora de estados globales (agrega (min) un caso de reduccion para cada accion)
        read_carousel.fulfilled,             //accion a reducir
        (state,action)=>{          //callback que depende del estado y la accion y es la encargada de reducir los estados
            let new_state = {
                ...state,          //a la copia del estado tengo que llenarle la propiedad carousel con los datos q m envia la accion
                carousel: action.payload.carousel
            }
            return new_state    //retorno en nuevo estado para que se actualice la vista
        }         
    )
    .addCase(
        read_cities.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                cities:action.payload.cities
            }
            return new_state
        }
    )
    .addCase(
        read_city.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                city:action.payload.city
            }
            return new_state
        }
    )
)
export default city_reducer