import {NextApiRequest, NextApiResponse} from "next";
import {saleor} from "../../graphql/client";
import {gql} from "@apollo/client";

export default (req: NextApiRequest, res: NextApiResponse)=>{
    saleor.mutate({
        mutation: gql`
        
        `
    })
}