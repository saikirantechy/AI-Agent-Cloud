from time import perf_counter
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response
import logging

logger = logging.getLogger("backend.middleware")

class RequestTimingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next) -> Response:
        start = perf_counter()
        response = await call_next(request)
        duration = perf_counter() - start
        logger.info("%s %s completed in %.3fs", request.method, request.url.path, duration)
        response.headers["X-Request-Duration"] = f"{duration:.3f}s"
        return response
