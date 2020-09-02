import React from "react";
import { SliderContextProps } from "./interfaces";

const SliderContext = React.createContext<Partial<SliderContextProps>>({});

export default SliderContext;
