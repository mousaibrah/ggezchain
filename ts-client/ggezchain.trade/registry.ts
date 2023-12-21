import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateTrade } from "./types/ggezchain/trade/tx";
import { MsgProcessTrade } from "./types/ggezchain/trade/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ggezchain.trade.MsgCreateTrade", MsgCreateTrade],
    ["/ggezchain.trade.MsgProcessTrade", MsgProcessTrade],
    
];

export { msgTypes }