"use client";

import { Web3Button } from "@web3modal/react";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { zeroAddress } from "viem";

import studentABI from "@/abi/Solidity101Students";
import classNames from "classnames";
import { useEffect } from "react";

const SignUpSection = () => {
  const { address } = useAccount();

  const { data, refetch } = useContractRead({
    address: "0x05873E54d8c1800A57d93B3fFd24f79E78Db74F0",
    abi: studentABI,
    functionName: "inscrito",
    args: [address || zeroAddress],
  });

  const { isSuccess, write, isLoading, error, reset } = useContractWrite({
    address: "0x05873E54d8c1800A57d93B3fFd24f79E78Db74F0",
    abi: studentABI,
    functionName: "inscribirme",
  });

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
    if (error) {
      setTimeout(() => reset(), 5000);
    }
  }, [isSuccess, error, reset, refetch]);

  console.log({ data, error });
  return (
    <section className="container mx-auto flex flex-col gap-y-2 items-center justify-center">
      {!address ? (
        <Web3Button />
      ) : (
        <button
          className={classNames(
            "btn btn-primary",
            data || isLoading ? "btn-disabled" : ""
          )}
          onClick={() => write()}
        >
          {isLoading ? (
            <span className="loading loading-spinner" />
          ) : data ? (
            "Inscrito!"
          ) : (
            "Inscríbete"
          )}
        </button>
      )}
      {error && !data ? (
        <div className="text-sm font-syneMono text-error">
          {(error.cause as any)?.metaMessages?.[0]}
        </div>
      ) : null}
      {data ? (
        <div>
          <div className="text-sm font-syneMono text-success whitespace-pre-wrap">
            Ya estás inscrito!
            {"\n"}
            <a
              href="https://link.excalidraw.com/readonly/06IWlU0lx7DsnVENd0hg"
              target="_blank"
              title="Link a notas de clase 1"
            >
              Link de notas Clase 1
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default SignUpSection;
