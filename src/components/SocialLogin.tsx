import { Icon } from "@iconify/react";
import classNames from "classnames";

interface Props {
    action?: "signin" | "signup",
    cn?: string
}

const defaultProps = {
    action: "signin"
}

SocialLogin.defaultProps = defaultProps

export default function SocialLogin(props: Props) {
	return (
        <div className={classNames(props.cn)}>
            <span className="text-center block mb-4">
                { props.action == 'signin' ? "Sign in with social" : "Sign up with social" }
            </span>
            <div className="flex items-center justify-around">
                <div className="border rounded-lg grid place-content-center w-12 h-12 cursor-pointer">
                    <Icon icon="mdi:facebook" className="text-[#0084FF] text-4xl" />
                </div>
                <div className="border rounded-lg grid place-content-center w-12 h-12 cursor-pointer">
                    <Icon icon="logos:google-icon" className="text-3xl" />
                </div>
                <div className="border rounded-lg grid place-content-center w-12 h-12 cursor-pointer">
                    <Icon icon="mdi:apple" className="text-4xl" />
                </div>
            </div>
        </div>
	);
}
