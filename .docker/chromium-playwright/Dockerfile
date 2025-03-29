ARG BASE_IMAGE=m1k1o/neko:chromium-debug
FROM $BASE_IMAGE

# Install Node.js and npm
RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends curl gnupg; \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -; \
    apt-get update; \
    apt-get install -y --no-install-recommends nodejs; \
    # Install required packages for Playwright
    apt-get install -y --no-install-recommends \
        libnss3 \
        libnspr4 \
        libatk1.0-0 \
        libatk-bridge2.0-0 \
        libcups2 \
        libdrm2 \
        libdbus-1-3 \
        libxkbcommon0 \
        libatspi2.0-0 \
        libx11-6 \
        libxcomposite1 \
        libxdamage1 \
        libxext6 \
        libxfixes3 \
        libxrandr2 \
        libgbm1 \
        libpango-1.0-0 \
        libcairo2 \
        libasound2; \
    # Clean up
    apt-get clean -y; \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# Create API server directory
RUN mkdir -p /home/neko/playwright-api
WORKDIR /home/neko/playwright-api

# Create package.json for the REST API server
COPY --chown=neko playwright-api/package.json .
RUN npm install

# Copy the API server application
COPY --chown=neko playwright-api/server.js .

# Add supervisord configuration for REST API server
COPY supervisord.conf /etc/neko/supervisord/playwright-api.conf

# Make sure neko user owns all files
RUN chown -R neko:neko /home/neko/playwright-api

# Expose port for REST API
EXPOSE 3000 