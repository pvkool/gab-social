# frozen_string_literal: true

class REST::MediaAttachmentSerializer < ActiveModel::Serializer
  include RoutingHelper

  attributes :id, :type, :url, :preview_url,
             :remote_url, :text_url, :meta,
             :description, :blurhash

  def id
    object.id.to_s
  end

  def url
    if object.file_file_name and object.file_file_name.start_with? "gab://media/"
      return object.file_file_name.sub("gab://media/", "").sub("https://gabfiles.blob.core.windows.net/", "https://gab.com/media/").sub("https://files.gab.com/file/files-gab/", "https://gab.com/media/").split("|")[1]
    end

    if object.needs_redownload?
      media_proxy_url(object.id, :original)
    else
      full_asset_url(object.file.url(:original))
    end
  end

  def remote_url
    object.remote_url.presence
  end

  def preview_url
    if object.file_file_name and object.file_file_name.start_with? "gab://media/"
      return object.file_file_name.sub("gab://media/", "").sub("https://gabfiles.blob.core.windows.net/", "https://gab.com/media/").sub("https://files.gab.com/file/files-gab/", "https://gab.com/media/").split("|")[0]
    end

    if object.needs_redownload?
      media_proxy_url(object.id, :small)
    else
      full_asset_url(object.file.url(:small))
    end
  end

  def text_url
    object.local? ? medium_url(object) : nil
  end

  def meta
    object.file.meta
  end
end