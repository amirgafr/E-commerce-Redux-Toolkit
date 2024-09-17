import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/slices/authSlice";
import logo from "../../assets/images/logo.png";

function Login() {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user.user);

  const handelSubmit = (e) => {
    dispatch(
      login({
        name: name,
        password: password,
      })
    );
  };

  return (
    <div className="h-full">
      <div className="flex min-h-full flex-2 flex-col justify-center px-11 py-12 lg:w-2/4 mx-auto">
        <div className="mx-auto">
          <img src={logo} className="w-[100px]" alt="" />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <input
          id="email"
          name="name"
          type="email"
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          required
          autoComplete="current-password"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          className="flex w-full justify-center rounded-md bg-red-600 px-3 mt-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => handelSubmit()}
        >
          sign
        </button>
      </div>

      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              AmirGafr
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://github.com/amirgafr"
                class="hover:underline me-4 md:me-6"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/amir_gafr/"
                class="hover:underline me-4 md:me-6"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Login;
