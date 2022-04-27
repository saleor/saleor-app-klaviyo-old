import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { Button, ConfirmButton } from "@saleor/macaw-ui";
import React, { ChangeEvent, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { MetadataInput } from "../graphql/generated/graphql";
import { useApp } from "../hooks/useApp";
import usePrivateMetadata from "../hooks/usePrivateMetadata";
import { useStyles } from "../styles/configurationPage";
import { getValuesFromMetadata } from "../utils/misc";

type FormFieldType = {
  name: string;
  value?: string;
  label: string;
  helperText?: string;
  type?: "secret" | "text";
};

const privateMetadataFields: FormFieldType[] = [
  {
    name: "example_metadata_value",
    label: "Example metadata value",
  },
  {
    name: "klaviyo_public_key",
    label: "Klaviyo public key",
    helperText: "Klaviyo public key for email provider",
    type: "secret",
  },
];

const removeEmptyMetadata = (metadata: MetadataInput[]) =>
  metadata.filter((item) => item.value);

const ConfigurationPage = () => {
  const classes = useStyles();
  const app = useApp();
  const id = app?.getState()?.id;

  const { data, queryLoading, updateMetadata, mutationState } =
    usePrivateMetadata(id);

  const [fields, setFields] = useState<FormFieldType[]>(privateMetadataFields);
  const [isApiKeyReadOnly, setIsApiKeyReadOnly] = useState(true);

  useEffect(() => {
    if (!queryLoading && data?.app?.privateMetadata) {
      const newFields = fields.map((field) => {
        const value = getValuesFromMetadata(field.name, data);
        return { ...field, value };
      });
      setFields(newFields);
    }
  }, [data]);

  const onChange = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    updateMetadata({
      metadataArray: removeEmptyMetadata(
        fields.map(
          (field) =>
            ({
              key: field.name,
              value: field.value,
            } as MetadataInput)
        )
      ),
    }).finally(() => {
      setIsApiKeyReadOnly(true);
    });
  };

  return (
    <Layout title="Configuration">
      <Card>
        <CardHeader title="Settings" />
        <CardContent>
          {queryLoading ? (
            <div className={classes.loadingContainer}>
              <CircularProgress size={64} />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {fields.map(({ name, label, value, helperText, type }) => (
                <div key={name} className={classes.fieldContainer}>
                  {type === "secret" ? (
                    <div className={classes.secretInputRow}>
                      <TextField
                        label={label}
                        helperText={helperText}
                        name={name}
                        fullWidth
                        inputProps={{
                          readOnly: isApiKeyReadOnly,
                          type: isApiKeyReadOnly ? "password" : "text",
                        }}
                        // Only way to disable chrome's autocomplete
                        autoComplete="current-password"
                        value={value ?? ""}
                        disabled={isApiKeyReadOnly}
                        onChange={onChange}
                      />
                      <Button
                        onClick={() => setIsApiKeyReadOnly((status) => !status)}
                      >
                        {isApiKeyReadOnly ? "Edit" : "Hide"}
                      </Button>
                    </div>
                  ) : (
                    <TextField
                      label={label}
                      helperText={helperText}
                      name={name}
                      fullWidth
                      onChange={onChange}
                      value={value ?? ""}
                    />
                  )}
                </div>
              ))}
              <div className={classes.confirmButtonContainer}>
                <ConfirmButton
                  type="submit"
                  variant="primary"
                  transitionState={mutationState}
                  labels={{
                    confirm: "Save",
                    error: "Error",
                  }}
                  className={classes.confirmButton}
                />
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ConfigurationPage;
