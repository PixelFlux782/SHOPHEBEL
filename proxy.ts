import { NextRequest, NextResponse } from "next/server";

const ADMIN_USERNAME = "admin";

function unauthorized() {
  return new NextResponse("Admin access requires authentication.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Shophebel Admin"',
    },
  });
}

function forbidden() {
  return new NextResponse("Admin access is not configured.", {
    status: 403,
  });
}

function parseBasicAuth(value: string | null) {
  if (!value?.startsWith("Basic ")) {
    return null;
  }

  try {
    const decoded = atob(value.slice("Basic ".length));
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex < 0) {
      return null;
    }

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

export function proxy(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD?.trim();

  if (!adminPassword) {
    return forbidden();
  }

  const credentials = parseBasicAuth(request.headers.get("authorization"));

  if (credentials?.username === ADMIN_USERNAME && credentials.password === adminPassword) {
    return NextResponse.next();
  }

  return unauthorized();
}

export const config = {
  matcher: ["/admin/:path*"],
};
