import React from "react";
import { SliderContextProps } from "./interface";

const SliderContext = React.createContext<Partial<SliderContextProps>>({});

export default SliderContext;
