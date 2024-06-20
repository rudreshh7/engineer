import { home, projects, about } from '../utils'
import { work1, work2, work3, work4, work5, work6 } from "../utils";
import { icon1, icon2, icon3, icon4, icon5, icon6 } from "../utils";

export const navLists = [
  { id: 1, name: "Home", icon: home },
  { id: 2, name: "Projects", icon: projects },
  { id: 3, name: "About", icon: about },
];


export const selectedWorkLists=[
  {id: 1, name: "EchoLayer", workImg: work1, icon: icon1, description: "A revolutionary sound manipulation tool."},
  {id: 2, name: "Pencil", workImg: work2, icon: icon2, description: "A digital sketching app for artists."},
  {id: 3, name: "SkyFrames", workImg: work3, icon: icon3, description: "A cloud-based video editing platform."},
  {id: 4, name: "QuantumRift", workImg: work4, icon: icon4, description: "A VR experience that bends reality."},
  {id: 5, name: "NeuralShift", workImg: work5, icon: icon5, description: "An AI-driven platform for cognitive enhancement."},
  {id: 6, name: "VirtualDawn", workImg: work6, icon: icon6, description: "A game that simulates the rise of civilizations."},
]