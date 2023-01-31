import { Inter } from "@next/font/google";
import { Grid, View, withAuthenticator } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify";
import { translations } from "@aws-amplify/ui-react";
import UploadDocument from "../components/updocument";
import Header from "@/components/header";
I18n.putVocabularies(translations);
I18n.setLanguage("es");

const inter = Inter({ subsets: ["latin"] });

const formFields = {
  signIn: {
    username: {
      placeholder: "Correo electronico",
      isRequired: true,
      label: "Email:",
    },
    password: {
      placeholder: "",
      isRequired: true,
    },
  },
};

export default function Home({ signOut, user }) {
  return (
    <View>
      <Grid templateColumns="1fr" templateRows={"1fr auto"}>
        <Header />
        <UploadDocument />
      </Grid>
    </View>
  );
}

/* export default withAuthenticator(Home, {
  formFields: formFields,
  hideSignUp: true,
}); */
