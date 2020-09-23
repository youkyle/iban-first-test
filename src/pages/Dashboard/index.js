import React, { useState, useEffect } from "react";
import { Flex, Box } from "reflexbox";
import Typography from "@material-ui/core/Typography";
import { compare, currencyRate } from "../../utils/helpers";
import { getAcounts } from "../../API";
import { useStyles } from "./styles";
import Wrapper from "../../components/Wrapper";
import { Chip } from "@material-ui/core";

function Dashboard() {
  const classes = useStyles();
  const [currency, ] = useState("EUR");
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    getAcounts().then((res) => {
      setAccounts(res.data.accounts);
    });
  }, []);
  //refreshing data every 15 sec
  useEffect(() => {
    const interval = setInterval(() => {
      getAcounts().then((res) => {
        setAccounts(res.data.accounts);
      });
    }, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Flex mt="20px" column align="center" className={classes.headTable}>
        <Box width={1 / 4} p="5px" align="center" justifyContent="center">
          <Typography align="center" variant="subtitle2">
            Titulaire
          </Typography>
        </Box>
        <Box width={1 / 4} p="5px" align="center" justifyContent="center">
          <Typography align="center" variant="subtitle2">
            Code
          </Typography>
        </Box>
        <Box width={1 / 4} p="5px" align="center" justifyContent="center">
          <Typography align="center" variant="subtitle2">
            Bic
          </Typography>
        </Box>
        <Box width={1 / 4} p="5px" align="center" justifyContent="center">
          <Typography align="center" variant="subtitle2">
            Amount/currency
          </Typography>
        </Box>
      </Flex>
      <Box className={classes.bodyTable}>
        {accounts.length &&
          accounts.sort(compare).map((account) => (
            <Flex
              key={account.id}
              column
              align="center"
              className={classes.rowTable}
            >
              <Box
                width={1 / 3}
                p="10px"
                align="center"
                justifyContent="center"
              >
                <Chip label={account.holder.name} className={classes.chip} />
              </Box>
              <Box
                width={1 / 3}
                p="10px"
                align="center"
                justifyContent="center"
              >
                <Chip
                  label={account.holderBank.clearingCode}
                  className={classes.chip}
                />
              </Box>
              <Box
                width={1 / 3}
                p="10px"
                align="center"
                justifyContent="center"
              >
                <Chip label={account.holderBank.bic} className={classes.chip} />
              </Box>
              <Box
                width={1 / 3}
                p="10px"
                align="center"
                justifyContent="center"
              >
                <Chip
                  color="primary"
                  label={`${(
                    account.amount * currencyRate(account.currency)
                  ).toFixed(2)}/${currency.toLowerCase()}`}
                  className={classes.chip}
                />
              </Box>
            </Flex>
          ))}
      </Box>
    </Wrapper>
  );
}

export default Dashboard;
