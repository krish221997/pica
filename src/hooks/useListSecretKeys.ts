import { useQuery } from "@tanstack/react-query";

import { keys } from "../endpoints";
import { listSecretKeysApi } from "../endpoints/settings";
import { EventAccessList } from "../types/secrets";

const useListSecretKeys = ({
  redacted = true,
  environment = "test",
}: {
  redacted?: boolean;
  environment?: "test" | "live";
}) => {
  return useQuery<EventAccessList>({
    queryKey: [keys["list.secret.keys"], environment],
    queryFn: () => listSecretKeysApi({ redacted, environment }),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 30000,
    retry: false,
  });
};

export default useListSecretKeys; 