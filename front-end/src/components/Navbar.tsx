"use client";

import { Box, Container, Flex, Link, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { isDevnetEnvironment } from "@/lib/contract-utils";
import { useDevnetWallet } from "@/lib/devnet-wallet-context";
import { DevnetWalletButton } from "./DevnetWalletButton";
import { ConnectWalletButton } from "./ConnectWallet";

export const Navbar = () => {
  const { currentWallet, wallets, setCurrentWallet } = useDevnetWallet();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" bg={colorMode === "dark" ? "#121212" : "white"} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex justify="space-between" h={16} align="center">
          <Flex align="center">
            <img
              src="/logo.png"
              alt="BRATVA Logo"
              style={{
                width: 56,
                height: 56,
                objectFit: "contain",
                display: "block",
              }}
            />
            <Link href="/" textDecoration="none">
              <Box
                fontSize="xl"
                fontWeight="bold"
                color="#C71517"
                ml={4}
                letterSpacing="-0.03em"
              >
                BRATVA
              </Box>
            </Link>
          </Flex>
          <Flex align="center" gap={4}>
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="md"
            />
            {isDevnetEnvironment() ? (
              <DevnetWalletButton
                currentWallet={currentWallet}
                wallets={wallets}
                onWalletSelect={setCurrentWallet}
              />
            ) : (
              <ConnectWalletButton />
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
