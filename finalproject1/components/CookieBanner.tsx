"use client";
import React, { useState, useEffect } from 'react';
import { Link, Card, Spacer, ScrollShadow, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';

export default function CookieBanner() {
    const [bannerVisible, setBannerVisible] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        // Check local storage only after the component mounts
        const consentValue = getLocalStorage("cookie_consent", null);
        setBannerVisible(consentValue !== 'true');

        // Update analytics if consent is granted
        if (consentValue === 'true') {
            window.gtag && window.gtag("consent", 'update', {
                'analytics_storage': 'granted'
            });
        }
    }, []);

    const handleAllowCookies = () => {
        setLocalStorage("cookie_consent", 'true');
        setBannerVisible(false);
    };

    const handleDeclineCookies = () => {
        setLocalStorage("cookie_consent", 'false');
        setBannerVisible(false);
    };

    if (!bannerVisible) {
        return null;
    }

    return (
        <div className={`fixed bottom-0 left-0 right-0 my-10 mx-auto max-w-max md:max-w-screen-sm flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-700 rounded-lg shadow`}>
            <div className='text-center'>
                <p>We use cookies on our site. By accepting, you agree to our <Link href="#" onPress={onOpen} color="primary">Privacy Policy</Link>.</p>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>

                                <ModalBody>
                                    <ScrollShadow size={100} className="w-[300px] h-[400px]" isEnabled={false}>
                                        <Card className="m-4 p-4">
                                            <h2 className="text-2xl font-bold mb-4">Privacy Policy for Cafe casero ViBi</h2>

                                            <h3 className="font-semibold">1. Introduction</h3>
                                            <p>
                                                This Privacy Policy outlines how Cafe casero ViBi collects, uses, and protects personal data when you use our website and the services provided. We are committed to respecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR).
                                            </p>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">2. Information We Collect</h3>
                                            <p>We may collect and process the following types of personal data:</p>
                                            <ul className="list-disc ml-6">
                                                <li>Usage Data: We collect information about how you interact with our website, including pages visited, time spent on the site, and other analytics data using Google Analytics.</li>
                                                <li>Device Information: We may collect information about your device, including the type of device, operating system, and browser used.</li>
                                                <li>IP Address: We may collect your IP address for security and monitoring purposes.</li>
                                            </ul>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">3. How We Use Your Data</h3>
                                            <p>We use the collected data for the following purposes:</p>
                                            <ul className="list-disc ml-6">
                                                <li>To improve and optimize our website&apos;s performance.</li>
                                                <li>To analyze user behavior and trends using Google Analytics.</li>
                                                <li>To prevent and address security issues.</li>
                                            </ul>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">4. Legal Basis for Processing</h3>
                                            <p>Our legal basis for processing personal data is based on your consent and our legitimate interest in improving our website and services.</p>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">5. Cookies</h3>
                                            <p>We use cookies to collect and store information. You can manage your cookie preferences through your browser settings.</p>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">6. Sharing Your Data</h3>
                                            <p>We do not sell or share your personal data with third parties for marketing purposes. We may share data with trusted service providers to help us improve our services.</p>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">7. Your Rights</h3>
                                            <p>You have the right to:</p>
                                            <ul className="list-disc ml-6">
                                                <li>Access your personal data.</li>
                                                <li>Correct inaccuracies in your personal data.</li>
                                                <li>Request the deletion of your personal data.</li>
                                                <li>Object to the processing of your personal data.</li>
                                            </ul>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">8. Security</h3>
                                            <p>We take appropriate measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">9. Changes to the Privacy Policy</h3>
                                            <p>We may update this Privacy Policy to reflect changes in our practices or for legal reasons. Please review this page periodically.</p>
                                            <Spacer y={1} />

                                            <h3 className="font-semibold">10. Contact Us</h3>
                                            <p>If you have any questions about this Privacy Policy or your personal data, please contact us at cafecaserovibi@gmail.com.</p>

                                        </Card>
                                    </ScrollShadow>
                                </ModalBody>

                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={handleDeclineCookies}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={handleAllowCookies}>Allow Cookies</button>
            </div>
        </div>
    );
}
