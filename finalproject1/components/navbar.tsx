"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { Logo } from "@/components/icons";
import { Modal, ModalContent,  ModalProps, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Login from "./Login";

export const Navbar = () => {

	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-head text-inherit">Cafe Casero ViBi</p>
					</NextLink>
				</NavbarBrand>
				<NavbarItem>
					<Link className="font-column" color="foreground" href="/Menu">
						Menu
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="font-column" color="foreground" href="#reward">
						Rewards
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="font-column" color="foreground" href="#community">
						Community
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="font-column" color="foreground" href="#about">
						About Us
					</Link>
				</NavbarItem>
				
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>				
				<NavbarItem className="hidden md:flex">
				<Link className="font-column" color="foreground" href="#" onPress={onOpen}>
						Login
					</Link>
					<Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
				<Login />
              </ModalBody> 
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
            </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
				</NavbarItem>
			</NavbarContent>

			
		</NextUINavbar>
	);
};
