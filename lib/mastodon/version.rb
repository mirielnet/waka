# frozen_string_literal: true

module Mastodon
  module Version
    module_function

    def waka_major
      1
    end

    def waka_minor
      0
    end

    def waka_flag
      'dev'
    end

    def major
      4
    end

    def minor
      3
    end

    def patch
      0
    end

    def default_prerelease
      'alpha.5'
    end

    def prerelease
      ENV['MASTODON_VERSION_PRERELEASE'].presence || default_prerelease
    end

    def to_a_of_waka
      [waka_major, waka_minor].compact
    end

    def to_s_of_waka
      components = [to_a_of_waka.join('.')]
      components << "-#{waka_flag}" if waka_flag.present?
      components.join
    end

    def to_a
      [major, minor, patch].compact
    end

    def to_s_of_mastodon
      components = [to_a.join('.')]
      components << "-#{prerelease}" if prerelease.present?
      components.join
    end

    def to_s
      waka_version = "和歌.#{to_s_of_waka}"
      mastodon_version = "v#{to_s_of_mastodon}"
      "#{waka_version}+#{mastodon_version}"
    end

    def build_metadata
      ['waka', to_s_of_waka, build_metadata_of_mastodon].compact.join('.')
    end

    def build_metadata_of_mastodon
      ENV.fetch('MASTODON_VERSION_METADATA', nil)
    end

    def gem_version
      @gem_version ||= if ENV.fetch('UPDATE_CHECK_SOURCE', 'waka') == 'waka'
                         Gem::Version.new("#{waka_major}.#{waka_minor}")
                       else
                         Gem::Version.new(to_s.split('+')[0])
                       end
    end

    def lts?
      waka_flag == 'LTS'
    end

    def dev?
      waka_flag == 'dev'
    end

    def repository
      ENV.fetch('GITHUB_REPOSITORY', 'mirielnet/waka')
    end

    def source_base_url
      ENV.fetch('SOURCE_BASE_URL', "https://github.com/#{repository}")
    end

    # specify git tag or commit hash here
    def source_tag
      ENV.fetch('SOURCE_TAG', nil)
    end

    def source_url
      if source_tag
        "#{source_base_url}/tree/#{source_tag}"
      else
        source_base_url
      end
    end

    def user_agent
      @user_agent ||= "#{HTTP::Request::USER_AGENT} (Mastodon/#{Version}; +http#{Rails.configuration.x.use_https ? 's' : ''}://#{Rails.configuration.x.web_domain}/)"
    end
  end
end
