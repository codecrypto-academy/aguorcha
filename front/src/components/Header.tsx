import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  return <div className="flex gap-2 justify-center pt-4">
    <Link to="home">
      <Button>Home</Button>
    </Link>
    <Link to="faucet">
      <Button>Faucet</Button>
    </Link>
    <Link to="balance">
      <Button>Balance</Button>
    </Link>
    <Link to="transfer">
      <Button>Transfer</Button>
    </Link>
  </div>
}