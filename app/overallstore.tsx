import {create} from 'zustand'
type brosky = {
  gradient:{Direction:string,From:string,To:string,Via:string|null},
  setDirection:(direction:string)=>void;
  handleFrom:(color:string)=>void;
  handleTo:(color:string)=>void;
  handleVia:(color:string|null)=>void;
}
type brosky2 = {
  currentColorDirection:string|null,
  setCurrentColorDirection:(colorDirection:string)=>void;
}
type brosky3 = {
 error:boolean,
  setError:(req:boolean)=>void;
}
export const currentGradient = create<brosky>((set)=>({
  gradient:{Direction:'bg-gradient-to-r',From:'from-blue-200',To:'to-red-200',Via:'via-yellow-100'},
  setDirection:(direction:string)=>set((state:any)=>({gradient:{...state.gradient,Direction:direction}})),
  handleFrom:(color:string)=>set((state)=>({gradient:{...state.gradient,From:color}})),
  handleTo:(color:string)=>set((state)=>({gradient:{...state.gradient,To:color}})),
  handleVia:(color:string|null)=>set((state)=>({gradient:{...state.gradient,Via:color}})),
}))
export const isFromOrToOrVia = create<brosky2>((set)=>({
  currentColorDirection:null,
  setCurrentColorDirection:(colorDirection:string)=>set(()=>({currentColorDirection:colorDirection}))
}))
export const isError = create<brosky3>((set)=>({
  error:false,
  setError:(req:boolean)=>set(()=>({error:req}))
}))
