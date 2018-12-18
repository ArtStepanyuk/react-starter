import React from "react";
import { Input } from "reactstrap";

export default function Search({ updateSearchQuery }) {
  return (
    <Input
      type="text"
      name="search"
      onChange={e => updateSearchQuery(e.target.value)}
    />
  );
}
