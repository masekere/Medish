import { Box } from "@mui/material";
import CheckoutForm from "components/Forms/CheckoutForm";
import CheckoutHero from "components/Hero/CheckoutHero";

export function Component() {
    return (
        <>
            <CheckoutHero />
            <CheckoutForm />
        </>
    )
}

Component.displayName = 'CheckoutPage'