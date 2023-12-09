'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function UserTable() {
  return (
    
    <Table className="dark" hideHeader removeWrapper aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ABOUT US</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="font-head">MENU</TableCell>
          <TableCell className="font-head">COMMUNITY</TableCell>
          <TableCell className="font-head">SOCIALS</TableCell>
          <TableCell className="font-head">ABOUT US</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell className="font-column">Beverages</TableCell>
          <TableCell className="font-column">Events</TableCell>
          <TableCell className="font-column">Instagram</TableCell>
          <TableCell className="font-column">Mission Statement</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell className="font-column">Bulk Brew</TableCell>
          <TableCell className="font-column">Active Partnerships</TableCell>
          <TableCell className="font-column">Facebook</TableCell>
          <TableCell className="font-column">Corporate Values</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell className="font-column">Merchandise</TableCell>
          <TableCell className="font-column">Outreach Programs</TableCell>
          <TableCell className="font-column">YouTube</TableCell>
          <TableCell className="font-column">Sourcing Commitments</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell className="font-column">Gift Cards</TableCell>
          <TableCell>-</TableCell>
          <TableCell className="font-column">Twitter</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
